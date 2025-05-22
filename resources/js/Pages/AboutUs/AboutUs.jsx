import { BecameDonorNow } from '@/components/Navbar/BecameDonorNow'
import UserLayout from '@/Layouts/UserLayout'
import { Globe, Heart, Star, UserCheck } from 'lucide-react'
import React from 'react'
const AboutUs = () => {
    const milestones = [
        {
            Icon: Heart,
            title: '200,000+ Lives Saved',
        },
        {
            Icon: UserCheck,
            title: '1 Million+ Active Users',
        },
        {
            Icon: Globe,
            title: '7,000+ Cities & Towns',
        },
        {
            Icon: Star,
            title: '100+ Impact Stories',
        },
    ]
    return (
        <UserLayout>
            <BecameDonorNow />
            <div className="flex justify-center items-center flex-col space-y-10 py-7">
                <h1 className='text-3xl font-bold w-1/2 text-center'>Our mission is to give hope a Lifeline, one drop at a time</h1>
                <p className='w-3/4 text-[#323842] text-center'>We are dedicated to saving lives by seamlessly connecting blood donors with those in immediate need. Our platform bridges the gap, ensuring that every request is met promptly and efficiently</p>
                <img src='https://picsum.photos/950/250.webp' className='rounded-lg shadow-lg' />
            </div>
            <div className="flex justify-center items-center flex-col space-y-10 mb-10">

                <h2 className='text-2xl font-semibold'>Our Journey Milestones</h2>
                <div className='grid lg:grid-cols-4 grid-rows-1 gap-4 w-10/12'>
                    {milestones.map((item, index) => (<div key={index.toString()} className='flex flex-col justify-center items-center space-y-2'>
                            <item.Icon className='text-primary w-10 h-10' />
                            <h3 className='text-black text-lg font-semibold'>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </UserLayout>
    )
}

export default AboutUs