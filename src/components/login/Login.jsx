import React, { useState } from "react";
import { useNavigate } from "react-router"; // <-- fix import
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("/credentials.json");
      const users = await res.json();

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching credentials:", error);
      alert("Login failed. Try again.");
    }
  };

  return (
    <div className="login_page">
      <form className="login_form">
        <h1>Login To Dashboard</h1>

        <div className="usern">
          <label htmlFor="usern_email">Email Address</label> <br />
          <input
            type="email"
            id="usern_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button id="btn" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
{/* <div>
      <div className="login_page">
        <form className="login_form">
        <h1>Login To Dashboard</h1>
          <div className="usern">
            <label htmlFor="usern_email">Email Address</label> <br />
            <input type="email" id="usern_email" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label> <br />
            <input type="text" id="password" />
          </div>

          <button id="btn" type="button">Login</button>
        </form>
      </div>
    </div> */}