import React, { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Head, useForm } from '@inertiajs/react'
import apiCall from '@/lib/apiCall';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { CalendarIcon, Loader2 } from 'lucide-react';
import InputError from '../InputError';
import { cn } from '@/lib/utils';
import { Form, FormControl, FormItem } from '../ui/form';
import Checkbox from '../Checkbox';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { format } from 'date-fns';
import { Calendar } from '../ui/calendar';

const RequestBloodForm = () => {
  const [processing, setProcessing] = useState(false);
  const [bloodType, setBloodType] = useState([]);
  const [date, setDate] = useState()
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
          <Form>
            <form className="p-6 md:p-8 grid gap-y-9" onSubmit={submit}>
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold text-primary">Request Blood</h2>
                <p className="text-sm text-muted-foreground">
                  Please fill up this form to submit your request for blood units/donors.<br /> This will take less than a minute.
                </p>
              </div>
              <div className="grid gap-y-4 w-full">
                <div className='flex flex-col gap-y-1'>
                  <Label >What is the required blood component? <span className="text-red-500">*</span></Label>
                  <span className='text-sm text-muted-foreground'>Select all the options that apply.</span>
                </div>
                <div className='' >
                  {['Packed Red Blood Cells (PRBC)', 'Whole Blood', 'Platelets', 'Fresh Frozen Plasma', 'Blood Donor']
                    .map((item, index) => <div className="flex items-center gap-x-2 py-1 mx-2" key={index.toString()}>
                      <input id={item} name={item} type="checkbox" checked={data[item]} onChange={(e) => {
                        if (data[item] == true) setData(`${item}`, false)
                        else setData(`${item}`, true)
                      }} className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm focus:ring-primary dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                    )
                  }
                </div>
              </div>
              <div className="grid gap-y-4 w-full">
                <Label>Please mention the date by when you require the donor/units. <span className="text-red-500">*</span></Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal mx-2",
                        !data.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {data.date ? format(data.date, "PPPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={data.date}
                      onSelect={e => {
                        setData('date', e)
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hospital_name">Name of the hospital where the recipient is admitted. <span className="text-red-500">*</span></Label>
                <Input disabled={processing} value={data.hospital_name} onChange={e => setData('hospital_name', e.target.value)} id="hospital_name" type="text" placeholder="Apollo Hospital" />
                <InputError message={errors.hospital_name} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="hospital_address">Hospital Address <span className="text-red-500">*</span></Label>
                <Input
                  disabled={processing}
                  value={data.hospital_address}
                  onChange={e => setData('hospital_address', e.target.value)}
                  id="hospital_address"
                  type="text"
                  name="hospital_address"
                  placeholder="2/241 - Apartment, Street"
                />
                <InputError message={errors.hospital_address} />
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="request_letter">Do you have a blood request letter from the doctor, signed and including their registration number? <span className="text-red-500">*</span></Label>
                <span className={cn('text-sm text-muted-foreground', (data.request_letter == 'no' && 'text-red-500 font-semibold'))} >If you selected 'No,' please note that you must submit the request letter at the time of collection.</span>
                <div className="grid grid-cols-2 gap-2">
                  {['yes', 'no'].map((item, index) => <div className="flex items-center" key={index.toString()}>
                    <input
                      id={item}
                      type="radio"
                      value={item}
                      disabled={processing}
                      name="request_letter"
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary-foreground dark:focus:ring-primary-foreground dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:opacity-50"
                      onChange={e => {
                        setData('request_letter', e.target.value)
                      }}
                      checked={data.request_letter == item}
                    />
                    <label htmlFor={item} className="disabled:opacity-50 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize">
                      {item}
                    </label>
                  </div>)}
                </div>
              </div>
              <div className='space-y-4'>
                <Label htmlFor="">Please provide the attendant's name and contact number. <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
                    <Input
                      disabled={processing}
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      id="name"
                      type="text"
                      placeholder="John Doe"
                    />
                    <InputError message={errors.email} />
                  </div>
                  <div className="grid gap-2 w-full">
                    <Label htmlFor="phone">
                      Phone <span className="text-red-500">*</span>
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
                          <SelectTrigger id="phone_country" className="w-full">
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
                          autoComplete="tel"
                          placeholder="9876543210"
                        />
                      </div>
                    </div>
                    <InputError message={errors.phone} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                  <Input
                    disabled={processing}
                    value={data.city}
                    onChange={e => setData('city', e.target.value)}
                    id="city"
                    type="text"
                    placeholder="Chennai"
                    autocomplete="shipping street-address"
                  />
                  <InputError message={errors.city} />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="pin">Postal Code <span className="text-red-500">*</span></Label>
                  <Input
                    disabled={processing}
                    value={data.pin}
                    onChange={e => setData('pin', e.target.value)}
                    id="pin"
                    type="text"
                    placeholder="600 001"
                    autocomplete="billing postal-code"
                  />
                  <InputError message={errors.pin} />
                </div>
              </div>
              <div className="grid gap-2 gap-y-4">
                <Label>
                  Gender <span className="text-red-500">*</span>
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
          </Form>
        </CardContent>
      </Card>
      <div
        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Fields marked with <span className="text-red-500">*</span> are required. • By clicking submit, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}

export default RequestBloodForm