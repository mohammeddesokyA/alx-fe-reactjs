import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    const userData = { username, email, password };

    console.log("Form submitted:", userData);

    // Mock API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Registration Form (Controlled Components)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
