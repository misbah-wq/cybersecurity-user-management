const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const winston = require("winston");

const app = express();

app.use(express.json());
app.use(helmet());

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