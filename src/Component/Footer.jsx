import React from 'react';
import Logo from './Logo/Logo';
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
  <aside>
    <Logo></Logo>
    <p className="  px-60">
      Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br/> shipments — we deliver on time, every time.
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <div>
    <ul className='flex justify-between gap-7 font-bold'>
        <li>Services</li>
        <li>Coverage</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
    </ul>
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4">
         <Link><div className='w-10 h-10 rounded-full bg-red-500 flex justify-center items-center'><FaYoutube></FaYoutube></div></Link>
         <Link><div className='w-10 h-10 rounded-full text-2xl bg-blue-500 flex justify-center items-center'><FaFacebookF></FaFacebookF></div></Link>
         <Link><div className='w-10 h-10 rounded-full text-2xl bg-white flex justify-center items-center'><FaXTwitter color='black' /></div></Link>
         <Link><div className='w-10 h-10 rounded-full text-2xl bg-[#0575B3] flex justify-center items-center'><FaLinkedinIn /></div></Link>
      </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;