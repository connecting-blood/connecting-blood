import UserLayout from '@/Layouts/UserLayout'
import { cn } from '@/lib/utils'
import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      color: "#3B88C3",
      title: 'Sign Up',
    },
    {
      color: "#FFBE55",
      title: 'Verify Blood Type',
    },
    {
      color: "#FC7E85",
      title: 'Donate Blood',
    },
  ]
  return (
    <UserLayout>
      <section className="flex justify-center items-center flex-col space-y-10 py-7">
        <h1 className='text-primary text-3xl font-bold w-1/2 text-center'>Give the Gift of Life</h1>
        <p className='w-3/4 text-[#323842] text-center'>step-by-step guide for donors on how to sign up, verify their blood type, and donate.</p>
        <form>
          <button className='bg-[#008080] text-white px-5 py-2 rounded-lg text-base' >Became a donor</button>
        </form>
      </section>
      <section className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-8/12 mx-auto">
        <div className='space-y-5'>
          {steps.map((item, index) => (
            <div key={index} className="flex space-x-10 items-center">
              <div
                className="text-6xl text-white px-3 rounded-md"
                style={{ backgroundColor: item.color }}
              >
                {index + 1}
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <img src='/assets/website/webp/person-for-sign-up.webp' className='w-8/12 h-auto' alt='Person for Sign Up' />
      </section>
    </UserLayout>
  )
}

export default HowItWorks