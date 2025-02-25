// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import { HiOutlinePlus } from "react-icons/hi2";
// import Image from 'next/image'
// import React from 'react'

// const CartDisplayBox = ({item}) => {
//   return (
//     <div className='w-full group relative py-5'>
//       <Dialog>
//         <DialogTrigger className='flex flex-col'>
//           <div className='group-hover:scale-95 duration-300'>
//             <Image src={item.image} alt="strawshort" width={300} height={100} className='rounded-2xl'/>
//             <div className='flex flex-col items-start text-left'>
//               <h4 className='font-Corn text-[1.5rem] mt-5 text-wrap'>{item.name}</h4>
//               <p className='text-wrap mt-2'>${item.price}</p>
//             </div>
//           </div>
//           <div className='absolute bottom-0 right-0 rounded-full text-walnut bg-softer p-2 cursor-pointer'>
//             <HiOutlinePlus size={30}/>
//           </div>
//         </DialogTrigger>
//         <DialogContent className="bg-soft text-softer">
//           <DialogHeader className="flex flex-col gap-4 justify-center items-center">
//               <Image src={item.image} alt='strawshort' width={200} height={200} className='rounded-2xl'/>
//               <div className='w-full flex flex-col justify-start'>
//                 <DialogTitle className="text-walnut">{item.name}</DialogTitle>
//                 <DialogDescription className="flex flex-col mt-3">
//                     {item.desc}
//                 </DialogDescription>
//               </div>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

// export default CartDisplayBox

"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { HiOutlinePlus } from "react-icons/hi2";
import Image from 'next/image';
import React, { useState } from 'react';

const CartDisplayBox = ({ item }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Define the available addons
  const addons = [
    { id: 'sprinkles', label: 'Sprinkles', price: 2 },
    { id: 'chocolate-chips', label: 'Chocolate Chips', price: 3 },
    { id: 'fresh-fruits', label: 'Fresh Fruits', price: 5 },
    { id: 'whipped-cream', label: 'Whipped Cream', price: 4 },
  ];

  // Handle addon selection
  const handleAddonChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAddons([...selectedAddons, value]);
    } else {
      setSelectedAddons(selectedAddons.filter((addon) => addon !== value));
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

  return (
    <div className='w-full group relative py-5'>
      <Dialog>
        <DialogTrigger className='flex flex-col'>
          <div className='group-hover:scale-95 duration-300'>
            <Image src={item.image} alt="strawshort" width={300} height={100} className='rounded-2xl' />
            <div className='flex flex-col items-start text-left'>
              <h4 className='font-Corn text-[1.5rem] mt-5 text-wrap'>{item.name}</h4>
              <p className='text-wrap mt-2'>${item.price}</p>
            </div>
          </div>
          <div className='absolute bottom-0 right-0 rounded-full text-walnut bg-softer p-2 cursor-pointer'>
            <HiOutlinePlus size={30} />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-soft text-softer">
          <DialogHeader className="flex flex-col gap-4 justify-center items-center">
            <Image src={item.image} alt='strawshort' width={200} height={200} className='rounded-2xl' />
            <div className='w-full flex flex-col justify-start'>
              <DialogTitle className="text-walnut text-center">{item.name}</DialogTitle>
              {/* <DialogDescription className="flex flex-col mt-3">
                {item.desc}
              </DialogDescription> */}

              {/* Addon Selection Form */}
              <div className="mt-2">
                <h3 className="text-walnut text-lg font-semibold">Select Addons</h3>
                {addons.map((addon) => (
                  <div key={addon.id} className="flex items-center mb-2">
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
                ))}
              </div>

              {/* Display Selected Addons */}
              {/* <div className="mt-2">
                <h3 className="text-walnut text-lg font-semibold">Selected Addons</h3>
                {selectedAddons.length > 0 ? (
                  <ul className="list-disc list-inside mt-2">
                    {selectedAddons.map((addonId) => {
                      const addon = addons.find((a) => a.id === addonId);
                      return (
                        <li key={addonId} className="text-softer">
                          {addon?.label} (+${addon?.price})
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-softer">No addons selected.</p>
                )}
              </div> */}

              {/* Display Total Price */}
              <div className="mt-6">
                <h3 className="text-walnut text-lg font-semibold">Total Price</h3>
                <p className="text-softer">${totalPrice}</p>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartDisplayBox;