import React from 'react';
import { Outlet } from 'react-router';
import Home from '../pages/Home/Home';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';


const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
             <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;