import React, { useState } from 'react';
import CBLogo from '../../../../public/assets/Logo.webp';
import { Menu, X } from 'lucide-react';
import Navbar from '@/components/Navbar/Navbar';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white text-center z-20 shadow-md py-4 space-y-3">
          {['Home', 'About Us', 'How it works', 'Donor', 'Seeker', 'Contact Us'].map((item) => (
            <div key={item} className="text-black font-medium">{item}</div>
          ))}
          <div className="space-x-2 mt-4">
            <button className="text-black font-medium">Log in</button>
            <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded font-medium transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('/assets/website/png/landing_background.jpeg')`,
        }}
      >
        {/* Hero Content */}
        <div
          style={{
            background: "radial-gradient(circle,rgba(0, 251, 255, 0.05) -10%, rgba(245,245,245,1) 75%)",
          }}
          className="relative z-10 flex flex-col text-center w-full text-black h-full">
          <Navbar contentContainerClass='w-full bg-transparent' navLinksClass='text-primary' />
          <div className='h-full flex flex-col justify-center align-middle items-center'>
            <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              The world needs people <br /> who save lives
            </h1>
            <p className="text-black mt-4 italic text-lg sm:text-xl">— Frederick Buechner</p>

            <p className="text-black mt-6 text-sm sm:text-base max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Purus quisque enim dolor et cras est.
              Nec tortor semper id viverra amet aliquam eros proin.
            </p>

            <button className="mt-8 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-2 rounded shadow-lg transition-all">
              Be the Difference
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
