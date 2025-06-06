import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import React from 'react'
import LinkedInSvg from '../SvgComponent/LinkedInSvg'
import TwitterSvg from '../SvgComponent/TwitterSvg'
import FacebookSvg from '../SvgComponent/FacebookSvg'
import InstagramSvg from '../SvgComponent/InstagramSvg'

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: 'Home', link: '#' },
        { name: 'About Us', link: '#' },
        { name: 'Services', link: '#' },
      ]
    }
  ]
  return (
    <div className='bg-accentA700 rounded-tl-3xl rounded-tr-3xl py-10 lg:py-20 px-5 lg:px-20'>
      <div class="grid grid-rows-1 lg:grid-cols-3 gap-10">
        <div className='space-y-3'>
          <div className='text-3xl text-white'>Latest News from</div>
          <div className="flex flex-col space-y-5">
            <label className="text-gray-300 text-sm">Email Address</label>
            <div className="flex items-center bg-accentA100 rounded-full p-1 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none focus:ring-transparent flex-1 px-4 py-2 text-accentA900 outline-none"
              />
              <button className="bg-accentA700 hover:bg-accentA800 text-white font-medium px-6 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>
            <div className='text-sm space-x-2 text-white flex flex-row items-center'>
              <a href='#' className='text-nowrap w-fit'>Terms of Service</a>
              <span>•</span>
              <a href='#' className='text-nowrap w-fit'>Privacy Policy</a>
              <span>•</span>
              <LinkedInSvg fill="var(--accentA100)" />
              <TwitterSvg fill="var(--accentA100)" />
              <FacebookSvg fill="var(--accentA100)" />
              <InstagramSvg fill="var(--accentA100)" />
            </div>
          </div>
        </div>
        <div className=''>
          {footerLinks.map((item, index) => (<div className='' >
            <h2 className={cn('text-white text-2xl font-bold cursor-not-allowed')}>{item.title}</h2>
            <div className='flex flex-col space-y-3 mt-5'>
              {item.links.map((link) => (
                <Link href={link.link} className='text-base font-medium text-[#F2F2FD] hover:text-white hover:underline decoration-indigo-800'>{link.name}</Link>
              ))}
            </div>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default Footer