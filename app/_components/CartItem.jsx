"use client"

import React from 'react'
import { HiOutlineMinus } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";
import { api } from '@/convex/_generated/api';
import { useMutation } from 'convex/react';
import { toast } from 'sonner';

const CartItem = ({item}) => {
    const userId = localStorage.getItem("userUid")
    const productId = item.productId
    const price = item.price
    const removeItem = useMutation(api.carts.removeItem)
    const addItem = useMutation(api.carts.addItem)
    const handleRemove = () => {
        removeItem({userId, productId})
    }
    
    const handleAdd = () => {
        addItem({userId, productId})
    }
  return (
    <div className='flex flex-col gap-3 text-walnut tracking-tighter p-2 border-[1px] border-walnut rounded-xl'>
       <div className='flex flex-col'>
            <h4 className='text-[1.5rem] font-Corn font-semibold'>{item.name}</h4>
            {item.topper.text !== "" && (
                <p className='text-[1rem] font-Open'>Topper: {item.topper.text}</p>
            )}
        </div>

        <div className='flex justify-between text-lg font-Open'>
            <p>${item.price}</p>
            <div className='flex gap-2 items-center'>
                <button onClick={handleRemove} className='w-5 h-5 bg-softer flex justify-center items-center rounded-full cursor-pointer'>
                    <HiOutlineMinus/>
                </button>
                <p>{item.quantity}</p>
                <button onClick={handleAdd} className='w-5 h-5 bg-softer flex justify-center items-center rounded-full cursor-pointer'>
                    <HiOutlinePlus/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
