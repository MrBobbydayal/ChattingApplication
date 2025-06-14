import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [data, setData] = useState({
    avatar: null as File | null,
    email: "",
    username: "",
    password: "",
  });

  const { register } = useAuth();

  const handleDataChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [name]: e.target.value,
      });
    };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setData({
        ...data,
        avatar: e.target.files[0],
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (data.avatar) {
      formData.append("avatar", data.avatar);
    }
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);

    await register(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-6">
      <div className="w-full max-w-xs p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          <span className="text-blue-400">Bobby ChatApp</span>
        </h1>
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          SignUp
        </h1>

        <form className="space-y-4" onSubmit={handleRegister}>
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
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.email}
              onChange={handleDataChange("email")}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Avatar</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="**********"
              className="w-full px-4 py-2 rounded-lg bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={data.password}
              onChange={handleDataChange("password")}
            />
          </div>
          <div className="pt-4">
            Already have an account?{" "}
            <NavLink to="/login" className="link link-warning text-blue-400">
              Login
            </NavLink>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold hover:opacity-90 transition"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
