import Link from 'next/link'
import React from 'react'
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { motion } from 'motion/react'

const Info = () => {

    const phoneNumber = 6266893322;
    return (
        // <div id='info' className='bg-softer rounded-t-3xl px-12 pt-12 py-10'>
        //   <div className='flex flex-col'>
        //     <div className='flex flex-col mb-10'>
        //       <h3 className='font-Corn text-[3rem] tracking-tighter font-semibold text-walnut'>
        //         Sweet Whispers
        //       </h3>
        //       <h4 className='mt-5 font-Open tracking-tighter font-bold md:text-[3.5rem] text-[2rem] text-walnut'>
        //         {/* A Haven for the Sweet Tooths */}
        //         Indulge in Sweet Perfection.
        //         {/* Life is Short, Eat More Cake. */}
        //       </h4>
        //     </div>
        //     <div className=' w-full flex flex-col mb-4'>
        //       <Link href={"/online-order"} className='border-2 border-walnut hover:bg-walnut hover:text-beige duration-300 md:p-4 p-2 text-walnut rounded-lg w-full md:text-[2rem] text-[2rem] flex justify-center'>Order Online</Link>
        //       <div className='flex md:flex-row flex-col justify-around mt-10 items-center'>
        //         <div>
        //           <img src="/logo-bw.png" alt="" className='md:w-[300px] w-[200px]'/>
        //         </div>
        //         {/* Links */}
        //         <div className='md:flex flex-col gap-3 justify-start text-walnut hidden'>
        //           <Link href={"https://www.instagram.com/bakewhisperer/"} target='_blank' className='flex items-center gap-3 group'>
        //             <PiInstagramLogoLight size={50}/>
        //             <p className='text-3xl group-hover:scale-90 duration-300'>@bakewhisperer</p>
        //           </Link>
        //           <Link href={`https://wa.me/${phoneNumber}`} target='_blank' className='flex items-center gap-4 group'>
        //             <PiWhatsappLogoLight size={50}/>
        //             <p className='text-3xl group-hover:scale-90 duration-300'>626-689-3322</p>
        //           </Link>
        //           <div className='flex items-center gap-4'>
        //             <SlLocationPin size={50}/>
        //             <p className='text-3xl'>BREA, CA</p>
        //           </div>
        //         </div>
        //         <div className='flex flex-col gap-3 justify-start text-walnut md:hidden'>
        //           <Link href={"https://www.instagram.com/bakewhisperer/"} target='_blank' className='flex items-center gap-3'>
        //             <PiInstagramLogoLight size={30}/>
        //             <p className='text-2xl'>@bakewhisperer</p>
        //           </Link>
        //           <Link target='_blank' href={`https://wa.me/${phoneNumber}`} className='flex items-center gap-4'>
        //             <PiWhatsappLogoLight size={30}/>
        //             <p className='text-2xl'>626-689-3322</p>
        //           </Link>
        //           <div className='flex items-center gap-4'>
        //             <SlLocationPin size={30}/>
        //             <p className='text-2xl'>BREA, CA</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <footer id='info' className='bg-softer rounded-t-3xl px-6 md:px-12 py-12'>
            <div className='max-w-screen mx-auto'>
                {/* Main Content */}
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-8'>
                    {/* Left: Logo & Name */}
                    <div className='flex flex-col items-center md:items-start'>
                        <img src="/logo-bw.png" alt="Sweet Whispers Logo" className='w-56 mb-3' />
                        <h3 className='font-Corn text-5xl font-bold text-walnut'>
                            Sweet Whispers
                        </h3>
                    </div>

                    {/* Right: Contact */}
                    <div className='flex flex-col gap-4 text-walnut items-center justify-end md:items-end md:mt-20'>
                        <Link
                            href={"https://www.instagram.com/bakewhisperer/"}
                            target='_blank'
                            className='flex items-center gap-2 group'
                        >
                            <PiInstagramLogoLight size={28} />
                            <p className='text-xl font-Open group-hover:opacity-70 duration-300'>@bakewhisperer</p>
                        </Link>
                        <Link
                            href={`https://wa.me/${phoneNumber}`}
                            target='_blank'
                            className='flex items-center gap-2 group'
                        >
                            <PiWhatsappLogoLight size={28} />
                            <p className='text-xl font-Open group-hover:opacity-70 duration-300'>626-689-3322</p>
                        </Link>
                        <div className='flex items-center gap-2'>
                            <SlLocationPin size={28} />
                            <p className='text-xl font-Open'>BREA, CA</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className='pt-6 border-t-[1px] border-walnut/80 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-walnut text-xl font-Open'>
                        © 2025 Sweet Whispers
                    </p>
                    <Link
                        href={"/online-order"}
                        className='border-2 border-walnut hover:bg-walnut hover:text-softer duration-300 px-8 py-2 text-walnut rounded-full text-lg font-Open font-medium'
                    >
                        Order Online
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Info
