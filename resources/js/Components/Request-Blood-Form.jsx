import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Head, useForm } from '@inertiajs/react'
import apiCall from '@/lib/apiCall';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import InputError from './InputError';
import { cn } from '@/lib/utils';

const RequestBloodForm = () => {
  const [processing, setProcessing] = useState(false);
  const [bloodType, setBloodType] = useState([]);
  const { data, setData, errors, setError } = useForm({
    name: "",
    phone: "",
    email: "",
    blood: "",
    units: "",
    gender: "male",
    custom_gender: "",
    address: "",
    city: "",
    pin: "",
  });
  const genders = ['male', 'female', 'other'];
  const getBloodData = () => {
    setProcessing(true);
    apiCall.get('blood-types/types')
      .then(res => {
        setBloodType(res.data?.data)
      })
      .catch(errors => {
        toast.error(errors.response?.data?.message || "Cannot get Blood Types.");
      }).finally(() => {
        setProcessing(!true);
      })
  }
  const submit = (e) => {
    setProcessing(true)
    e.preventDefault();
    setTimeout(() => {
      setProcessing(false)
    }, 5000);
  }
  useEffect(() => {
    getBloodData()
  }, [])
  return (
    <div className='flex flex-col gap-3'>
      <Head title='Request Blood' />
      <Toaster />
      <Card className="overflow-hidden">
        <CardContent className="grid p-0">
          <form className="p-6 md:p-8 grid gap-y-4" onSubmit={submit}>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-primary">Request Blood</h2>
              <p className="text-balance text-muted-foreground">
                Fill In the Form we can help you further !
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name <span className="inline-block align-top text-red-500">*</span></Label>
              <Input disabled={processing} value={data.name} onChange={e => setData('name', e.target.value)} id="name" type="text" placeholder="John Doe" />
              <InputError message={errors.name} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div className="grid gap-2 w-full">
                <Label htmlFor="phone">
                  Phone <span className="inline-block align-top text-red-500">*</span>
                </Label>
                <div className="flex gap-x-2">
                  <div className="w-fit">
                    <Select
                      disabled={processing}
                      onValueChange={(e) => {
                        // setData('blood', e)
                        // setData('units', null)
                      }}
                    >
                      <SelectTrigger id="blood" className="w-full">
                        <SelectValue placeholder="🇮🇳 +91" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value={"india"}>{"🇮🇳 +91"}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Input
                      disabled={processing}
                      maxLength="10"
                      className="w-ful"
                      value={data.phone}
                      onChange={(e) => setData("phone", e.target.value)}
                      id="phone"
                      type="tel"
                      placeholder="9876543210"
                    />
                  </div>
                </div>
                <InputError message={errors.phone} />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="email">Email</Label>
                <Input
                  disabled={processing}
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                  id="email"
                  type="email"
                  placeholder="contact@example.com"
                />
                <InputError message={errors.email} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address <span className="inline-block align-top text-red-500">*</span></Label>
              <Input
                disabled={processing}
                value={data.address}
                onChange={e => setData('address', e.target.value)}
                id="address"
                type="text"
                placeholder="2/241 - My Apartment, My Street"
              />
              <InputError message={errors.address} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div className="grid gap-2 w-full">
                <Label htmlFor="city">City <span className="inline-block align-top text-red-500">*</span></Label>
                <Input
                  disabled={processing}
                  value={data.city}
                  onChange={e => setData('city', e.target.value)}
                  id="city"
                  type="text"
                  placeholder="Chennai"
                />
                <InputError message={errors.city} />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="pin">Postal Code <span className="inline-block align-top text-red-500">*</span></Label>
                <Input
                  disabled={processing}
                  value={data.pin}
                  onChange={e => setData('pin', e.target.value)}
                  id="pin"
                  type="text"
                  placeholder="600 001"
                />
                <InputError message={errors.pin} />
              </div>
            </div>
            <div className="grid gap-2 gap-y-4">
              <Label>
                Gender <span className="inline-block align-top text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['male', 'female', 'other'].map((item, index) => <div className="flex items-center" key={index.toString()}>
                  <input
                    id={item}
                    type="radio"
                    value={item}
                    disabled={processing}
                    name="gender"
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-foreground dark:focus:ring-primary-foreground dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50"
                    onChange={e => setData("gender", e.target.value)}
                    checked={data.gender == item}
                  />
                  <label htmlFor={item} className="disabled:opacity-50 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">
                    {item}
                  </label>
                </div>)}
              </div>
              <InputError message={errors.gender} />
              {(data.gender == genders[genders.length - 1]) ?
                <Input disabled={processing} value={data.custom_gender} className={""} onChange={e => setData('custom_gender', e.target.value)} id="custom_gender" type="text" placeholder="Mention the gender here" /> :
                null
              }
              {(data.gender == genders[genders.length - 1]) ? <InputError message={errors.custom_gender} /> : null}
            </div>

            <div className={cn("grid gap-x-4 gap-y-4", data.blood && "md:grid-cols-2")}>
              <div className="grid gap-2 w-full">
                <Label htmlFor="blood">Blood <span className='inline-block align-top text-red-500'>*</span></Label>
                <Select disabled={processing} onValueChange={e => {
                  setData('blood', e)
                }}>
                  <SelectTrigger id="blood" className="w-full">
                    <SelectValue placeholder="Select a blood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Blood Type</SelectLabel>
                      {bloodType.map((blood, bloodIndex) => <SelectItem key={bloodIndex.toString()} value={blood}>{blood}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <InputError message={errors.blood} />
              </div>
              {data.blood ? <div className="grid gap-2 w-full">
                <Label htmlFor="units">Units</Label>
                <Input disabled={processing} inputmode="numeric" value={data.units} onChange={e => setData('units', e.target.value)} id="units" type="text" placeholder="2" />
                <InputError message={errors.units} />
              </div> : null}
            </div>
            <Button disabled={processing} type="submit" className="w-full">
              {processing ? <>
                <Loader2 className="animate-spin" />
                Submitting...
              </>
                : <>
                  Submit
                </>
              }

            </Button>
          </form>
        </CardContent>
      </Card>
      <div
        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Fields marked with <span className="inline-block align-top text-red-500">*</span> are required. • By clicking submit, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

export default RequestBloodForm