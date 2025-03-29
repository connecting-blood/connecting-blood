import { cn } from '@/lib/utils'
import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: 'Home', link: '#' },
        { name: 'About Us', link: '#' },
        { name: 'Services', link: '#' },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: 'Blogs', link: '#' },
        { name: 'Podcasts', link: '#' },
        { name: 'User Guides', link: '#' },
        { name: 'FAQs', link: '#' },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: '5007 Ocean Avenue, Shollinganur, Chennai', link: '#' },
        { name: '+91 9876543210', link: 'tel:+919876543210' },
        { name: 'danieljackson@connectingblood.com', link: '#' },
      ]
    },
  ]
  return (
    <div className='bg-[#1D2128] rounded-tl-3xl rounded-tr-3xl py-10 lg:py-20 px-5 lg:px-20'>
      <div class="grid grid-rows-1 lg:grid-cols-6 gap-10">
        <div className='lg:col-span-2 space-y-3'>
          <div className='text-3xl text-white'>Latest News from</div>
          <div className="flex flex-col space-y-5">
            <label className="text-gray-300 text-sm">Email Address</label>
            <div className="flex items-center bg-gray-800 rounded-full p-1 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none focus:ring-transparent flex-1 px-4 py-2 text-white outline-none"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {footerLinks.map((item, index) => (<div className='' >
          <h2 className={cn('text-[#636AE8] text-3xl font-bold')}>{item.title}</h2>
          <div className='flex flex-col space-y-3 mt-5'>
            {item.links.map((link) => (
              <Link href={link.link} className='text-base font-medium text-[#F2F2FD]'>{link.name}</Link>
            ))}
          </div>
        </div>))}
      </div>
    </div>
  )
}

export default Footer