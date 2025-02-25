import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'

const CartDisplayBox = ({item}) => {
  return (
    <div className='w-full'>
      <Dialog>
        <DialogTrigger className='flex flex-col'>
            <Image src={item.image} alt="strawshort" width={300} height={100} className='rounded-2xl'/>
            <div className='flex flex-col items-start text-left'>
            <h4 className='font-Corn text-[1.5rem] mt-5 text-wrap'>{item.name}</h4>
            <p className='text-wrap mt-5'>{item.desc}</p>
            </div>
        </DialogTrigger>
        <DialogContent className="">
        <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default CartDisplayBox

// "use client"
// import React, { useState } from 'react'

// const CartDisplayBox = () => {
//     const[open, setOpen] = useState(false)
//   return (
//     <>
//         <div className='w-full'>
//             <div onClick={() => setOpen(!open)} className='w-full flex flex-col cursor-pointer'>
//                 <img src="/strawshort.jpg" alt="" className='h-[400px] rounded-2xl'/>
//                 <h3 className='font-Corn text-[1.5rem] mt-5 text-wrap'>Strawberry Shortcake</h3>
//                 <p className='text-wrap mt-5'>A light, soft, and airy chiffon cake filled with strawberry confit, fresh cream, and strawberry slices</p>
//             </div>
//         </div>
//         {open && (
//             <div className='absolute h-0 flex justify-center items-center'>
//                 <div className='bg-white h-[100px] w-[100px]'>
//                     Test
//                 </div>
//             </div>
//         )}
//     </>
//   )
// }

// export default CartDisplayBox

