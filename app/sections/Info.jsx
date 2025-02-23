import Link from 'next/link'
import React from 'react'
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const Info = () => {
  return (
    <div id='info' className='bg-secondary rounded-t-3xl px-12 pt-12'>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-10'>
          <h3 className='font-Corn text-[3rem] tracking-tighter font-semibold text-walnut'>
            Sweet Whispers
          </h3>
          <h4 className='mt-5 font-Open tracking-tighter font-bold md:text-[3.5rem] text-[2rem] text-walnut'>
            {/* A Haven for the Sweet Tooths */}
            Indulge in Sweet Perfection.
            {/* Life is Short, Eat More Cake. */}
          </h4>
        </div>
        <div className=' w-full flex flex-col mb-4'>
          <Link href={"/pages/online-order"} className='border-2 border-walnut hover:bg-walnut hover:text-beige duration-300 p-4 text-walnut rounded-lg w-full md:text-[2rem] text-[2rem] flex justify-center'>Order Online</Link>
          
          <div className='flex justify-around mt-10 items-center'>
            <div>
              <img src="/logo-bw.png" alt="" className='w-[300px]'/>
            </div>
            {/* Links */}
            <div className='flex flex-col gap-3 justify-start text-walnut'>
              <Link href={"https://www.instagram.com/bakewhisperer/"} className='flex items-center gap-3'>
                <PiInstagramLogoLight size={50}/>
                <p className='text-3xl'>@bakewhisperer</p>
              </Link>
              <Link href={"/"} className='flex items-center gap-4'>
                <PiWhatsappLogoLight size={50}/>
                <p className='text-3xl'>626-689-3322</p>
              </Link>
              <div className='flex items-center gap-4'>
                <SlLocationPin size={50}/>
                <p className='text-3xl'>BREA, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
