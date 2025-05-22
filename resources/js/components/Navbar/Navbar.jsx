import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import NavLink from '../NavLink';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About Us', href: 'AboutUs' },
  { name: 'How It Works', href: 'howItWorks' },
  { name: 'Donor', href: 'donor' },
  { name: 'Seeker', href: 'seeker' },
  { name: 'Contact Us', href: 'contactUs' },
];
const Navbar = ({
  contentContainerClass = "",
  navLinksClass = ""
}) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(e => !e);
  }
  return (
    <nav className={cn("bg-white border-gray-200 dark:bg-gray-900", contentContainerClass)}>
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto px-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/assets/Logo.webp" className="h-8" alt="Flowbite Logo" />
          {/* <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">{import.meta.env.VITE_APP_NAME}</span> */}
        </a>
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={cn("w-full h-full md:block md:w-auto md:z-0 md:static fixed inset-0 z-20 flex items-start justify-between md:flex-none bg-white md:bg-transparent", open ? '' : 'hidden')} id="navbar-default">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 w-full">
            <Link href={route('home')} className="flex items-center space-x-3 rtl:space-x-reverse md:hidden justify-between">
              <img src="/assets/Logo.webp" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{import.meta.env.DDD}</span>
            </Link>
            <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <X size={25} color='#000' />
            </button>
            <ul className="w-full font-medium flex flex-col mt-5 p-0 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:items-center items-end space-y-3 md:space-y-0 px-5">
              {navLinks.map((link, index) => (
                <li key={index.toString()}>
                  <Link href={route(link.href)} className={cn("block md:p-0", (window.location.href == route(link.href) ? 'text-primary' : 'text-primaryP300'), navLinksClass)} >{link.name}</Link>
                </li>
              ))}
              <div className='flex flex-col md:flex-row md:items-center items-end md:space-x-4 space-y-3 md:space-y-0' >
                <Link href={route('login')} className={cn((window.location.href == route('login') ? 'text-primary' : 'text-primaryP300'), navLinksClass)} >Login</Link>
                <Button className="w-fit">Sign Up</Button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar