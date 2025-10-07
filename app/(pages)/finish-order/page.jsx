"use client"

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GoMail } from "react-icons/go";
import { PiWhatsappLogoLight } from "react-icons/pi";

const page = () => {

  const phoneNumber = 6266893322;


  return (
    <div className='h-screen py-8 px-8 flex justify-center items-center text-walnut tracking-tighter'>
      <div className='flex flex-col text-center'>
        <h4 className='font-Corn text-walnut md:text-[4rem] text-[2.2rem] leading-tight font-bold'>THANK YOU FOR HELPING US GROW!</h4>
        <p className='font-Open md:text-[2rem]  mt-5'>Please understand that we are not preparing your order until payment is received.</p>
        <p className='font-Open md:text-[2rem]'>Payment can be made via Zelle & Venmo, we will email you the payment detail together with order confirmation</p>
        <p className='font-Open md:text-[2rem] font-semibold'>If you did not the order&apos;s confirmation email by 24 hours. Please contact us</p>
        <p className='font-Open md:text-[2rem] mt-4'>Contact us through:</p>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2'>
                <Link href={`https://wa.me/${phoneNumber}`} target='_blank' className='flex items-center gap-4 group'>
                  <PiWhatsappLogoLight size={50}/>
                  <p className='text-3xl group-hover:scale-90 duration-300'>626-689-3322</p>
                </Link>
            </div>
            <div className='flex items-center gap-2'>
                <GoMail size={30}/>
                <p className='text-3xl'>bake.whisper@gmail.com</p>
            </div>
        </div>
        <div className='mt-8'>
            <Link href={"/"} className='p-2 border-walnut md:border-2 border-2 rounded-xl hover:text-beige hover:bg-walnut md:text-[3rem] text-xl font-Open tracking-tighter'>
                Home
            </Link>
        </div>
      </div>
    </div>
  )
}

export default page
