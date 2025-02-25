import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "../style/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid login credentials");
      } else {
        setSuccess("Login successful! Redirecting...");

        // ✅ FIX: Store the token correctly
        localStorage.setItem("userToken", data.token); // Ensure this matches PrivateRoute check

        // ✅ FIX: Redirect instantly after login
        navigate("/"); // Redirect to homepage
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <div className="logo">Swadeshi Stores</div>
      </header>
      <div className="login-box">
        <h2>Log In</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
