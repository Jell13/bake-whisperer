"use client"

import React, { useEffect, useState } from 'react'
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { ReactLenis } from 'lenis/react'
import Link from 'next/link'
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import CartItem from '@/app/_components/CartItem';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import emailjs from "@emailjs/browser"

const page = () => {

    const[userId, setUserId] = useState(null)
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== "undefined") {
        const userUid = localStorage.getItem("userUid");
        setUserId(userUid);
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
            blockHeadless: true
        })
        }
    }, []);
    const[totalPrice, setTotal] = useState(0)
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[date, setDate] = useState("")
    const activeCart = useQuery(api.carts.getCart, {userId})  
    const completeCart = useMutation(api.carts.completeCart)
    const createOrder = useMutation(api.orders.createOrder)  


    useEffect(() => {
        if (activeCart && activeCart.items) {
            const newTotalPrice = activeCart.items.reduce((total, item) => total + item.price, 0);
            setTotal(newTotalPrice);
        }
    }, [activeCart]);
    const creatingOrder = async (cartId) => {
        const orderCreation = await createOrder({
            userId: userId,
            name: name,
            email: email,
            date: date,
            totalPrice: totalPrice,
            cartId: cartId
        })
        toast.promise(orderCreation, {
            success: "Order has been placed successfully",
            error: "Order is not placed"
        })
    }

    const handleClick = async () => {
        const currDate = new Date()
        const dateSelected = new Date(date)
        if (!name || !email || !date) {
            toast.error("Please fill in all fields.");
            return;
        }
        if (isNaN(dateSelected.getTime())) {
            toast.error("Invalid date selected.");
            return;
        }
    
        if (dateSelected <= currDate) {
            toast.error("Selected date must be in the future.");
            return;
        }
        else{
            const completedCart = await completeCart({userId})

            await creatingOrder(completedCart._id)

            const orderDetails = completedCart.items
            .map((item) => `${item.name}, Quantity:${item.quantity} - $${item.price}, ${item.topper.text.length > 0 ? "No topper" : "With topper"}`)
            .join("\n");

            const templateParams = {
                name: `${name}`,
                email: `${email}`,
                date: `${date}`,
                orderDetails: `${orderDetails}`,
                totalPrice: `$${totalPrice}`
            }

            emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams).then(
                (res) => {
                    console.log("success")
                },
                (error) => {
                    console.log(error)
                }
            )

            setName("")
            setEmail("")
            setDate("")
            setTotal(0)

            router.push("finish-order")
        }
    }

  return (
    <ReactLenis root>
        <div className='py-6 flex flex-col relative'>
            <nav className='flex items-center justify-between md:px-8 px-6 bg-soft'>
                <div className='flex gap-5 items-center'>
                    <Link href={"/pages/online-order"}>
                        <div className='flex items-center p-2 py-1 border-[1px] text-[1rem] border-walnut text-walnut font-Open rounded-xl hover:bg-walnut hover:text-beige duration-300'>
                            <HiOutlineChevronLeft/>
                            <p>Back</p>
                        </div>
                    </Link>
                    <h2 className='font-Corn md:text-[3rem] text-[2rem] font-semibold text-walnut tracking-tighter'>Order Confirmation</h2>
                </div>
            </nav>
            <div className='flex md:flex-row flex-col justify-between px-8 mt-8 md:gap-32 gap-20 text-walnut tracking-tighter'>
                <div className='flex flex-col md:w-2/3 w-full gap-4'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="name">Name for order:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id="name" type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id='email' type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-[1rem] text-walnut font-medium font-Open' htmlFor="date">Desired ready time:</label>
                        <input value={date} onChange={(e) => setDate(e.target.value)} className='px-2 py-[2px] rounded-lg border-none outline-none font-Open' id='email' type="date" />
                    </div>
                    <div className='flex flex-col mt-10 text-walnut font-Open tracking-tighter'>
                        <p className='text-[2rem]'>Disclaimer:</p>
                        <p>The cake toppers are based on inventory</p>
                        <p>for more information please contact us through:</p>
                        <div className='flex items-center mt-5'>
                            <PiWhatsappLogoLight size={50}/>
                            <p className='text-3xl'>626-689-3322</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-full h-full flex flex-col rounded-xl bg-beige p-4'>
                    <h3 className='font-Corn tracking-tighter font-semibold text-[2rem]'>Cart</h3>
                    {activeCart && activeCart.items.length > 0 && (
                        <div className='flex flex-col gap-4 mt-6'>
                            {activeCart.items.map((item, id) => (
                                <CartItem key={id} item={item}/>
                            ))}
                        </div>
                    )}
                    <h4 className='font-Open tracking-tighter font-semibold text-[2rem] mt-6'>Total Price: ${totalPrice}</h4>
                </div>
            </div>
            <div className='flex w-full justify-end mt-10 px-8'>
                <button onClick={handleClick} className='p-2 border-2 text-[2rem] border-walnut text-walnut rounded-xl hover:bg-walnut hover:text-beige duration-300'>Order</button>
            </div>
        </div>
    </ReactLenis>
  )
}

export default page
