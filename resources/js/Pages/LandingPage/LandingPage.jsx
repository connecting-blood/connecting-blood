import React, { useState } from 'react';
import CBLogo from '../../../../public/assets/Logo.webp';
import { Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-8 fixed top-0 left-0 right-0 z-20">
        <img src={CBLogo} alt="Blood Drop Icon" className="w-10 h-10" />

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {['Home', 'About Us', 'How it works', 'Donor', 'Seeker', 'Contact Us'].map((item) => (
            <li key={item} className="text-black cursor-pointer hover:text-red-700 transition-colors font-semibold">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="text-black hover:text-red-700 font-semibold">Log in</button>
          <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded font-medium transition-all">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden z-30">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>
      </nav>

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
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl w-full text-black">
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
  );
};

export default LandingPage;
