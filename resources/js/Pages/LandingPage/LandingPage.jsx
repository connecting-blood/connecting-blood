import React from 'react';
import CBLogo from '../../../../public/assets/Logo.webp'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 bg-white fixed top-0 left-0 right-0 z-20 border-none">

        <img src={CBLogo} alt="Blood Drop Icon" className="w-8 h-8" />
        <ul className="hidden md:flex space-x-6 text-red-700 font-medium">
          <li className="cursor-pointer hover:text-red-900">Home</li>
          <li className="cursor-pointer hover:text-red-900">About Us</li>
          <li className="cursor-pointer hover:text-red-900">How it works</li>
          <li className="cursor-pointer hover:text-red-900">Donor</li>
          <li className="cursor-pointer hover:text-red-900">Seeker</li>
          <li className="cursor-pointer hover:text-red-900">Contact Us</li>
        </ul>
        <div className="space-x-4">
          <button className="text-red-700 font-medium hover:text-red-900">Log in</button>
          <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-1 rounded font-medium transition-all">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center pt-24"
        style={{ backgroundImage: `url('/your-image.jpg')` }} // Replace with actual image path
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            The world needs people <br /> who save lives
          </h1>
          <p className="mt-4 italic text-lg text-gray-700">— Frederick Buechner</p>
          <p className="mt-6 text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Purus quisque enim dolor et cras est. Nec tortor semper id viverra amet aliquam eros proin.
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
