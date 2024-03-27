import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here (e.g., send login request to server)
    console.log("Logging in with:", { username, password });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          width: "300px",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "20px", textAlign: "center" }}>
          Login
        </h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
            }}
          />
          <button
            type="button"
            onClick={handleLogin}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
