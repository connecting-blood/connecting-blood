import { Button } from '@/components/ui/button'
import UserLayout from '@/Layouts/UserLayout'
import { cn } from '@/lib/utils'
import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
    },
    {
      title: 'Verify Blood Type',
    },
    {
      title: 'Donate Blood',
    },
  ]
  return (
    <UserLayout className={"space-y-10 py-10"} >
      <section className="flex justify-center items-center flex-col space-y-5 py-7 w-9/12 mx-auto">
        <h1 className='text-3xl font-bold w-1/2 text-center'>Give the Gift of Life</h1>
        <p className='w-3/4 text-textBlack'>Whether you want to donate or enquire, we’re here to help! Connect with us  anytime through the CB app or website for quick assistance.</p>
        <form>
          <Button >Became a donor</Button>
        </form>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-9/12 mx-auto">
        <div className='space-y-5'>
          {steps.map((item, index) => (
            <div key={index} className="flex space-x-10 items-center">
              <div
                className="text-6xl text-white px-3 rounded-md bg-primary"
              >
                {index + 1}
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <img src='/assets/website/webp/person-for-sign-up.webp' className='w-9/12 h-auto' alt='Person for Sign Up' />
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-9/12 mx-auto bg-neutralsN500_O p-5 rounded-md">
        <img src='/assets/website/png/Blood donation Safety &  Hygeine Guidelines.png' className='w-full h-auto' alt='Person for Sign Up' />
        <div className='space-y-5'>
          <h2 className='text-4xl font-semibold'>Blood donation Safety & Hygiene Guidelines</h2>
          <p className='text-lg' >We organize and collect donated blood through blood donation camps and home blood collection  services. Read more Information on safety and hygiene during donation.</p>
          <div className='flex flex-row justify-center' >
            <Button>Learn More</Button>
          </div>
        </div>
      </section>
      <section className='space-y-5'>
        <h2 className='text-4xl font-semibold text-center'>Find & Track Blood</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-9/12 mx-auto p-5 rounded-md">
          <div className='space-y-5'>
            <p className='text-lg' >Looking for blood? We’re here to help! Connect with us  anytime through the CB app or website for quick assistance.</p>
            <Button>Find Blood Now</Button>
          </div>
          <img src='/assets/website/png/Find & Track Blood.png' className='w-full h-auto' alt='Person for Sign Up' />
        </div>
      </section>
      <section className='p-5 rounded-md bg-neutralsN500_O w-9/12 mx-auto space-y-5'>
        <h2 className='text-4xl font-semibold text-center'>Smart Matching for Faster Donations</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 ">
          <div className='py-10'>
            <p className='text-lg' >Our round-the-clock tracking system allows you to locate  available blood units in real time, even during emergencies.</p>
          </div>
          <img src='/assets/website/png/Smart Matching for Faster Donations.png' className='w-full h-auto' alt='Person for Sign Up' />
        </div>
      </section>
    </UserLayout>
  )
}

export default HowItWorks