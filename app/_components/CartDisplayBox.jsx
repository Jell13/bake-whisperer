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
              <p className='text-wrap mt-2'>${item.price}</p>
            </div>
        </DialogTrigger>
        <DialogContent className="bg-soft">
          <DialogHeader className="flex flex-col justify-center items-center">
              <Image src={item.image} alt='strawshort' width={200} height={200} className='rounded-2xl'/>
              <div className='w-full flex flex-col justify-start'>
                <DialogTitle>{item.name}</DialogTitle>
                <DialogDescription>
                    {item.desc}
                </DialogDescription>
              </div>
          </DialogHeader>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default CartDisplayBox

