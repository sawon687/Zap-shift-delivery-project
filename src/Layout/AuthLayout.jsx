import React from 'react';
import { Outlet } from 'react-router';
import authImge from "../assets/authImage.png";
import Logo from '../Component/Logo/Logo';

const AuthLayout = () => {
    return (
        <>
            
            <div className='flex justify-center'>
               
                 <div className='flex-1 pt-5 px-5'>
                    <div className='pl-10'> <Logo  ></Logo></div>
                    <Outlet></Outlet>
                 </div>
                <div className='bg-[#FAFDF0] flex-1 flex justify-center items-center min-h-screen w-full'>
                    <img src={authImge} alt="" />
                </div>
            </div>
        </>
    );
};

export default AuthLayout;