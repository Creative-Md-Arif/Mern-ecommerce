import React, { useState } from "react";
import { logo } from "../assets/images";
import Title from "./Title";
import { toast } from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../config";

const Login = ({ setToken }) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(serverUrl + "/api/user/admin", {
        email,
        password,
      });
      const data = response?.data;

      if (data?.success) {
        toast.success(data?.message);
        setToken(data?.token);
        // toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("Login Error", error);
      toast.error(error?.message);
    }
  };
  return (
    <div className="flex flex-col gap-2 bg-gray-300 min-h-screen items-center justify-center">
      <div className="bg-white p-2 rounded-md">
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white p-5 min-w-96 shadow-xl rounded-lg">
        <Title children="text-xl font-bold">Admin Panel</Title>
        <form onSubmit={handleAdminLogin} className="flex flex-col gap-4 mt-4">
          <div>
            <p className="text-sm font-semibold">Email Address</p>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-400 outline-none py-1 px-4 mt-1 rounded-md"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Password</p>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-400 outline-none py-1 px-4 mt-1 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-black/80 text-white py-2 rounded-md hover:bg-black duration-300 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
