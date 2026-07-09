const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create SQLite database
const db = new sqlite3.Database("users.db");

// Create users table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT,
            password TEXT
        )
    `);

    // Insert a sample user
    db.run(`
        INSERT INTO users (email, password)
        SELECT 'admin@test.com', 'admin123'
        WHERE NOT EXISTS (
            SELECT 1 FROM users WHERE email='admin@test.com'
        )
    `);
});

// Home page
app.get("/", (req, res) => {
    res.send("SQL Injection Lab Running");
});

// ----------------------
// VULNERABLE LOGIN
// ----------------------
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    // Intentionally vulnerable query
    const query =
        `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

    console.log(query);

    db.get(query, (err, row) => {

        if (err) {
            return res.status(500).send(err.message);
        }

        if (row) {
            res.send("Login Successful");
        } else {
            res.send("Invalid Credentials");
        }

    });

});

app.listen(3001, () => {
    console.log("SQLi Lab Running on Port 3001");
});