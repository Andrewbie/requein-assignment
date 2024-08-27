import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errror, setErrror] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      const role = jwtDecode(response.data.token).role;
      switch (role) {
        case 'admin':
          window.location.href = '/admin';
          break;
        case 'user':
          window.location.href = '/user';
          break;
        case 'guest':
          window.location.href = '/guest';
          break;
        default:
          window.location.href = '/';
      }
    } catch (error) {
      setErrror('You are not authorized')
      console.error('Error logging in:', error);
    }
  };
  const dirRegister = ()=>{
    window.location.href = '/register'
  }

  return (
    <>
    <div className='bg-[#2b2b2b] h-[100vh] text-[#60fff4] flex justify-center items-center'>
    <div className='flex flex-col items-center justify-center  border-2 w-[50%] h-[80%] gap-7 bg-[#4580c0] rounded-3xl'>
      <h2 className='text-5xl text-[#132f51] font-bold'>Login</h2>
      
      <input
        className='p-4 w-[50%] rounded-xl bg-[#8eddff] focus:border-2 focus:border[#CE7B91] text-[#213d5a]'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      className='p-4 w-[50%] rounded-xl bg-[#8eddff] focus:border-2 focus:border[#CE7B91] text-[#213d5a]'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='border-2 px-8 py-3 rounded-full bg-[#132f51]'>Login</button>
      <div className='text-red-500 font-semibold text-shadow-lg'>{errror}</div>
    <div>
    <span>New User? </span>
    <button onClick={dirRegister} className='text-[#231967] underline'>Register</button>
    </div>
    </div>
    </div>
    </>
  );
};

export default Login;
