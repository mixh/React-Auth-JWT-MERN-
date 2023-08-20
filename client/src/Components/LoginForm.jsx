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
    <div className="w-2/3 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Email:</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Password:</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded focus:ring focus:ring-blue-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
