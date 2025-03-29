import Footer from '@/Components/Footer/Footer'
import React from 'react'

const Home = () => {
    return (<>
        <div className="flex justify-center items-center">
            <div className="lg:w-10/12 w-11/12 space-y-10 py-10">
                <div className="grid lg:grid-cols-3 grid-rows-1 gap-4">
                    <div className='flex flex-col justify-center items-start space-y-7 max-w-full lg:col-span-2'>
                        <h1 className='text-[#71102F] text-3xl font-bold max-w-full' >Revolutionizing Blood Donation through Technology</h1>
                        <p className='text-base text-[#171A1F]'>Connecting Blood simplifies donor management, ensures secure transactions with blockchain, and enhances collaboration with hospitals and blood banks. Ready to transform blood donation?</p>
                        <button className='bg-[#009230] text-white px-5 py-2 rounded-lg text-base' >Help Save Lives - Donate Blood Today</button>
                        <button className='bg-[#F2F2FD] text-[#2C35E0] px-5 py-2 rounded-full text-base' >Book an Appointment</button>
                    </div>
                    <div className='flex justify-center lg:justify-end items-center'>
                        <img src='/storage/website/webp/blood-donate.jpeg' className='rounded-xl w-full' />
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-rows-1 gap-4 bg-[#F2F2FD] p-10 rounded-xl">
                    <div></div>
                    <div className='flex flex-col justify-center items-start space-y-7 max-w-full'>
                        <h2 className='text-[#71102F] text-3xl font-bold max-w-full' >Key Features</h2>
                        <p className='text-base text-[#171A1F]'>Connecting Blood leverages advanced technology to seamlessly match blood donors with seekers, ensuring fast, secure, and reliable blood availability through smart tracking and real-time collaboration.</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 p-10 lg:p-0 grid-rows-1 gap-4 bg-transparent rounded-xl">
                    <div className='flex flex-col justify-center items-start space-y-7 max-w-full'>
                        <h2 className='text-[#71102F] text-3xl font-bold max-w-full' >Find A Match</h2>
                        <p className='text-base text-[#171A1F]'>A smart search tool that quickly locates nearby blood donors based on location, blood type, and urgency, ensuring timely and life-saving connections.</p>
                        <form className="flex items-center w-full lg:w-1/2">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="voice-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#636AE8] focus:border-[#636AE8] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#636AE8] dark:focus:border-[#636AE8] ps-10"
                                    placeholder="Search" required
                                />
                            </div>
                        </form>
                        <div className="flex flex-row space-x-4">
                            {['Blood Type', 'Location', 'Urgency'].map((item, index) => (
                                <div className="flex items-center" key={index}>
                                    <input
                                        id={item + "-" + index}
                                        type="radio"
                                        value=""
                                        name="request-type"
                                        className="w-4 h-4 text-[#636AE8] bg-gray-100 border-gray-300 focus:ring-[#636AE8] dark:focus:ring-[#636AE8] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        defaultChecked={index === 0}
                                    />
                                    <label
                                        htmlFor={item + "-" + index}
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {item}
                                    </label>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='flex justify-center lg:justify-end items-center'>
                        <img src='/storage/website/svg/women.svg' className='rounded-xl' />
                    </div>
                </div>
                <h2 className='text-[#71102F] text-3xl font-bold max-w-full text-center'>What Our Clients Say</h2>
                <div className="grid lg:grid-cols-2 p-10 lg:p-0 grid-rows-1 gap-4 bg-[#F2F2FD] rounded-xl">
                    <div className='flex justify-center lg:justify-end items-center'>
                        <img src='/storage/website/svg/men.svg' className='rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-center items-start space-y-7 w-full'>
                        <p className='text-base text-[#171A1F]'>Since using CB, we are able to reduce wastage of blood by channeling it to people in need of blood. The whole process is efficient. It's a game-changer!"</p>
                        <p className='text-base text-[#171A1F]'>John Anderson | Apex Solutions</p>
                        <div className='w-full justify-center flex space-x-2'>
                            <button className='p-1 w-1 rounded-full bg-[#636AE8]'></button>
                            <button className='p-1 w-1 rounded-full bg-[#636AE8]/50'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Home