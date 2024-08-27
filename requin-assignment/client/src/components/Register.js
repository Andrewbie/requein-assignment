import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("/api/register", { username, password, role });
      alert("User registered successfully");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Error registering user");
    }
  };

  const dirLogin = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-[#2b2b2b] h-[100vh] text-[#60fff4] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center  border-2 w-[50%] h-[80%] gap-7 bg-[#4580c0] rounded-3xl">
          <h2 className="text-5xl text-[#132f51] font-bold">Register</h2>
          <input
            className="p-4 w-[50%] rounded-xl bg-[#8eddff] focus:border-2 focus:border[#CE7B91] text-[#213d5a]"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="p-4 w-[50%] rounded-xl bg-[#8eddff] focus:border-2 focus:border[#CE7B91] text-[#213d5a]"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-4 w-[50%] rounded-xl bg-[#8eddff] focus:border-2 focus:border[#CE7B91] text-[#213d5a]"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
          <button
            onClick={handleRegister}
            className="border-2 px-8 py-3 rounded-full bg-[#132f51]"
          >
            Register
          </button>
          <div>
            <span>Already Registered? </span>
            <button onClick={dirLogin} className="text-[#231967] underline">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
