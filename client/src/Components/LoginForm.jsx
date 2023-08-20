import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = { email: email, password: password };
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        const expiration = new Date();
        expiration.setHours(expiration.getHours() + 1);
        localStorage.setItem("expiration", expiration.toISOString());
        toast.success("authentication successful!!");
        navigate("/dashboard");
      } else {
        toast.error("Couldnt Authenticate the User.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error);
    }
  };

  return (
    <div>
      <h2> Login </h2>
      <form>
        <div>
          <label> Email : </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" onClick={(e) => handleLogin(e)}>
          {" "}
          Login{" "}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
