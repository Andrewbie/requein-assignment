import React from 'react';

const UserDashboard = () => {
  return (
    <div className='bg-[#2b2b2b] h-[100vh] text-[#60fff4] flex justify-center items-center'>
    <div className='flex flex-col items-center justify-start pt-20 border-2 w-[50%] h-[80%] gap-7 bg-[#4580c0] rounded-3xl'>
      <h2 className='text-5xl text-[#132f51] font-bold'>User Dashboard</h2>
      <p className='font-semibold text-xl'>Welcome, User!</p>
      <div>It's cool to be one of our fam!</div>
    </div>
    </div>
  );
};

export default UserDashboard;
