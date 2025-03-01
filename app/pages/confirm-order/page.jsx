"use client"

import React, { useState } from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { ReactLenis } from 'lenis/react'
import Link from 'next/link'
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import CartItem from '@/app/_components/CartItem';

const page = () => {

    const userId = localStorage.getItem("userUid")
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const activeCart = useQuery(api.carts.getCart, {userId})    

  return (
    <ReactLenis>
        <div className='py-6 flex flex-col'>
            <nav className='flex items-center justify-between px-8 bg-soft'>
                <div className='flex gap-5 items-center'>
                    <Link href={"/pages/online-order"}>
                        <div className='flex items-center p-2 py-1 border-[1px] text-[1rem] border-walnut text-walnut font-Open rounded-xl hover:bg-walnut hover:text-beige duration-300'>
                            <HiOutlineChevronLeft/>
                            <p>Back</p>
                        </div>
                    </Link>
                    <h2 className='font-Corn md:text-[3rem] text-[1.5rem] font-semibold text-walnut tracking-tighter'>Order Confirmation</h2>
                </div>
            </nav>
            <div className='flex justify-between px-8 mt-8 gap-32 text-walnut tracking-tighter'>
                <div className='flex flex-col w-2/3 gap-4'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="name">Name for order:</label>
                        <input className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id="name" type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="email">Email:</label>
                        <input className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id='email' type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="date">Desired ready time:</label>
                        <input className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id='email' type="datetime-local" />
                    </div>
                </div>
                <div className='w-1/3 h-full rounded-xl bg-beige p-4'>
                    <h3 className='font-Corn tracking-tighter font-semibold text-[2rem]'>Cart</h3>
                    {activeCart && activeCart.items.length > 0 && (
                        <div className='flex flex-col gap-4 mt-6'>
                            {activeCart.items.map((item, id) => (
                                <CartItem key={id} item={item}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    </ReactLenis>
  )
}

export default page
