"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { HiOutlinePlus } from "react-icons/hi2";
import Image from 'next/image';
import React, { useState } from 'react';
import { useMutation } from "convex/react";
import { api } from '@/convex/_generated/api';


const CartDisplayBox = ({ item }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [active, setActive] = useState(false)
  const [topper, setTopper] = useState("")
  const addCart = useMutation(api.carts.createCart)

  // Define the available addons
  const addons = [
    { id: 'cake_topper', label: 'Cake Topper', price: 2 },
  ];

  // Handle addon selection
  const handleAddonChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAddons([...selectedAddons, value]);
      setActive(!active)
    } else {
      setSelectedAddons(selectedAddons.filter((addon) => addon !== value));
      setActive(!active)
    }
  };

  // Calculate total price
  const basePrice = item.price;
  const totalPrice = selectedAddons.reduce(
    (total, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    },
    basePrice
  );

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userUid")
    const name = item.name
    const productId = active ? `${item.id}-top-${topper}` : item.id
    const topperText = active ? topper : ""
    await addCart({
      userId: userId,
      name: name,
      price: totalPrice,
      quantity: 1,
      productId: productId,
      topper: {text: topperText}
    })
  }

  return (
    <div className='w-full group relative py-5'>
      <Dialog>
        <DialogTrigger className='flex flex-col'>
          <div className='group-hover:scale-95 duration-300'>
            <Image src={item.image} alt="strawshort" width={300} height={100} className='rounded-2xl' />
            <div className='flex flex-col items-start text-left'>
              <h4 className='font-Corn text-[1.5rem] mt-5 text-wrap'>{item.name}</h4>
              <p className='text-wrap'>{item.desc}</p>
              <p className='text-wrap mt-2'>${item.price}</p>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 rounded-full text-walnut bg-softer p-2 cursor-pointer'>
            <HiOutlinePlus size={30} />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-soft text-softer">
          <DialogHeader className="flex flex-col gap-4 justify-center items-center relative">
            <Image src={item.image} alt='strawshort' width={200} height={200} className='rounded-2xl' />
            <div className='w-full flex flex-col justify-start'>
              <DialogTitle className="text-walnut text-center">{item.name}</DialogTitle>

              {/* Addon Selection Form */}
              {item.type === "cake" && (
                <>
                  <div className="mt-2">
                    <h3 className="text-walnut text-lg font-semibold">Select Addons</h3>
                    {addons.map((addon) => (
                      <div key={addon.id} className='flex flex-col'>
                        <div className="flex items-center mb-2">
                          <input
                            type="checkbox"
                            id={addon.id}
                            value={addon.id}
                            checked={selectedAddons.includes(addon.id)}
                            onChange={handleAddonChange}
                            className="mr-2"
                          />
                          <label htmlFor={addon.id} className="text-softer">
                            {addon.label} (+${addon.price})
                          </label>
                        </div>
                        <input value={topper} onChange={(e) => setTopper(e.target.value)} type="text" className={`${active ? "flex" : "hidden"} duration-300 px-2 py-1 rounded-xl outline-none border-none`}/>
                      </div>
                    ))}
                  </div>
                </>
              )}
            

              {/* Display Total Price */}
              <div className="mt-6">
                <h3 className="text-walnut text-lg font-semibold">Total Price</h3>
                <p className="text-softer">${totalPrice}</p>
              </div>

              <button onClick={() => handleSubmit()} className='absolute right-0 bottom-0 px-2 py-2 bg-softer text-walnut rounded-xl hover:scale-95 duration-300'>
                Add to cart
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartDisplayBox;