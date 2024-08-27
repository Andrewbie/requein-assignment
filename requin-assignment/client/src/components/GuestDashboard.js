import React from 'react';

const GuestDashboard = () => {
  return (
    <div className='bg-[#2b2b2b] h-[100vh] text-[#60fff4] flex justify-center items-center'>
    <div className='flex flex-col items-center justify-start pt-20 border-2 w-[50%] h-[80%] gap-7 bg-[#4580c0] rounded-3xl'>
      <h2 className='text-5xl text-[#132f51] font-bold'>Guest Dashboard</h2>
      <p className='font-semibold text-xl'>Welcome, Guest!</p>
      <div>I hope you to be our permanent!</div>
    </div>
    </div>
  );
};

export default GuestDashboard;
