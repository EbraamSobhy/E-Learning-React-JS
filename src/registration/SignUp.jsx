import { useState } from "react";
import PasswordInput from "../Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axios from "axios";
import { toast } from "react-toastify";
import './signup.css'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");

    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup",
        { username: name, email, password },
        { withCredentials: true }
      );

      if (res.data.success === false) {
        setError(res.data.message);
        toast.error(res.data.message);
        return;
      }

      toast.success(res.data.message);
      setError("");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error response:", error.response);
        console.error("Error request:", error.request);
      } else {
        console.error("Unexpected error:", error);
      }
      toast.error("An error occurred. Please try again later.");
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <form onSubmit={handleSignUp}>
          <h4 className="signup-heading">Sign Up</h4>

          <input
            type="text"
            placeholder="Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-primary">
            SIGN UP
          </button>

          <p className="login-link">
            Already have an account?{" "}
            <Link to="/login" className="login-link-text">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
