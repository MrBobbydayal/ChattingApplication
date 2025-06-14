// Importing necessary components and hooks
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

// Component for the Login page
const Login = () => {
  // State to manage input data (username and password)
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // Accessing the login function from the AuthContext
  const { login } = useAuth();

  // Function to update state when input data changes
  const handleDataChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [name]: e.target.value,
      });
    };

  // Function to handle the login process
  const handleLogin = async () => await login(data);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6">
  <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
   <h1 className="text-3xl font-semibold text-center text-white mb-6">
     <span className="text-blue-400">Bobby ChatApp</span> 
    </h1>
    <h1 className="text-3xl font-semibold text-center text-white mb-6">
      Login
    </h1>

    <form className="space-y-4" onSubmit={handleLogin}>
      <div>
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="username"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={data.username}
         onChange={handleDataChange("username")}
        />
      </div>
      <div>
        <label className="block text-sm  mb-1">Password</label>
        <input
          type="password"
          placeholder="**********"
          className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
           value={data.password}
          onChange={handleDataChange("password")}
        />
      </div>
      <div className="pt-4">
        Didn't have account? <NavLink to='/register'  className="link link-warning text-blue-400">Register</NavLink>
      </div>
      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Login;
