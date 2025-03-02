import Link from 'next/link';
import React from 'react'
import { GoMail } from "react-icons/go";
import { PiWhatsappLogoLight } from "react-icons/pi";

const page = () => {
  return (
    <div className='h-screen py-8 px-8 flex justify-center items-center text-walnut tracking-tighter'>
      <div className='flex flex-col text-center'>
        <h4 className='font-Corn text-walnut text-[4rem] font-semibold'>THANK YOU FOR HELPING US GROW!</h4>
        <p className='font-Open text-[2rem] mt-5'>Please understand that we are not preparing your order until payment is not received.</p>
        <p className='font-Open text-[2rem]'>Payment can be made via Zelle & Venmo</p>
        <p className='font-Open text-[2rem] mt-4'>Contact us through:</p>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2'>
                <PiWhatsappLogoLight size={30}/>
                <p className='text-2xl'>626-689-3322</p>
            </div>
            <div className='flex items-center gap-2'>
                <GoMail size={30}/>
                <p className='text-2xl'>bake.whisper@gmail.com</p>
            </div>
        </div>
        <div className='mt-8'>
            <Link href={"/"} className='p-2 border-walnut border-2 rounded-xl hover:text-beige hover:bg-walnut text-[3rem] font-Open duration-300 tracking-tighter'>
                Home
            </Link>
        </div>
      </div>
    </div>
  )
}

export default page
