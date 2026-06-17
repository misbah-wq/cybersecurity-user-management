import { useState } from "react";
import validator from "validator";
import bcrypt from "bcryptjs";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!validator.isEmail(email)) {
      alert("Invalid Email");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Original Password:", password);
    console.log("Hashed Password:", hashedPassword);

    alert("Signup Successful! Check Console (F12)");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management System</h1>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button>Login</button>

      <hr />

      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSignup}>
        Signup
      </button>

      <hr />

      <h2>Profile</h2>

      <p><strong>Name:</strong> Test User</p>
      <p><strong>Email:</strong> test@gmail.com</p>
      <p><strong>Role:</strong> User</p>
    </div>
  );
}

export default App;