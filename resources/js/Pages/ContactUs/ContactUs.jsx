import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import UserLayout from '@/Layouts/UserLayout'
import { Mail, MessageCircleHeart, Phone } from 'lucide-react'
import React from 'react'

const ContactUs = () => {
  return (
    <UserLayout className={"grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4 w-9/12 mx-auto py-10"} >
      <div>
        <h1 className='text-3xl font-semibold' >Contact Us</h1>
        <p className='text-lg'>We are here to help.</p>
        <div className="my-5 space-y-5">
          <div className="flex flex-row item-center space-x-3">
            <Mail className='text-primary' /> <p>{import.meta.env.VITE_COMPANY_MAIL}</p>
          </div>
          <div className="flex flex-row item-center space-x-3">
            <Phone className='text-primary' /> <p>{import.meta.env.VITE_COMPANY_PHONE}</p>
          </div>
          <div className="flex flex-row item-center space-x-3">
            <MessageCircleHeart className='text-primary' /> <p>Live Chat</p>
          </div>
          <div className="flex flex-row item-center space-x-3">
            <p>We’re available 9:00AM IST - 5:00PM IST everyday</p>
          </div>
          <Button>Chat Now</Button>
        </div>
      </div>
      <div className='bg-neutralsN500_O rounded-2xl p-5 space-y-5' >
        <h1 className='text-3xl font-semibold' >We’d love to hear from you!</h1>
        <div className="grid gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4'>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" placeholder="+91 98765 43210" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" placeholder="John Doe" />
        </div>
        <Button>Send Message</Button>
      </div>
    </UserLayout>
  )
}

export default ContactUs