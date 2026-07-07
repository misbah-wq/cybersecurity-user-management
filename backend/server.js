const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const winston = require("winston");

const app = express();


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    console.log("Rate limit exceeded!");
    res.status(429).json({
      error: "Too many requests. Please try again later."
    });
  }
});

app.use(express.json());
app.use(helmet());
app.use(limiter);

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "security.log"
    })
  ]
});

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.post("/signup", async (req, res) => {

  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  logger.info("Signup Attempt");

  res.json({
    email,
    hashedPassword
  });

});

app.post("/login", (req, res) => {

  const token = jwt.sign(
    {
      email: req.body.email
    },
    "secret-key"
  );

  logger.info("Login Attempt");

  res.json({
    token
  });

});

app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});