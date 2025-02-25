import CartDisplayBox from '@/app/_components/CartDisplayBox'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import React from 'react'

const page = () => {

  const cakes = [
    {name: "Strawberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with strawberry confit, fresh cream, and strawberry slices", price: 37, image:"/strawshort.jpg"},
    {name: "Blueberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with blueberry confit, fresh cream, and blueberries", price: 37, image:"/blueberry.jpg"},
    {name: "Basque Burnt Cheesecake", desc: "Extra creamy burnt cheesecake", price: 37, image:"/cheese.jpg"},
    {name: "Tiramisu Cake", desc: "A light, soft, and airy coffee chiffon cake filled with mascarpone cream and dusted with cocoa powder", price: 37, image:"/tiramisu.jpg"}
  ]

  const puffs = [
    {name: "Matcha Filled Cream Puffs", desc: "", price: 16, image: "/puff_matcha.jpg"}
  ]
  return (
    <section className='flex flex-col'>
      <nav className='flex items-center justify-between pr-8 bg-soft sticky top-0'>
        <div className='flex gap-3 items-center'>
          <Link href={"/"}>
            <img src="/logo-bw.png" alt="" className='w-[150px]'/>
          </Link>
          <h2 className='font-Corn text-[3rem] font-semibold text-walnut'>Online Ordering</h2>
        </div>
        <Sheet>
          <SheetTrigger>
            <HiOutlineShoppingBag size={40}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
      <div className='flex px-12 justify-between gap-4'>
        <div className='flex flex-col w-full'>
          <h3 className='font-Corn text-walnut text-[2.5rem] font-medium'>Cakes</h3>
          <div className='grid grid-cols-3 w-full mt-5 gap-4'>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[0]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[1]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[2]}/>
            </div>
          </div>
          <div className='grid grid-cols-3 w-full mt-5'>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[3]}/>
            </div>
            <div className='col-span-1'>
              &nbsp;
            </div>
            <div className='col-span-1'>
              &nbsp;
            </div>
          </div>
          <h3 className='font-Corn text-walnut text-[2.5rem] font-medium mt-10'>Cream Puffs</h3>
          <div className='grid grid-cols-3 w-full mt-5'>
            <div className='col-span-1'>
              <CartDisplayBox item={puffs[0]}/>
            </div>
          </div>
        </div>
       <div className='w-1/2'>
        &nbsp;
       </div>
      </div>
    </section>
  )
}

export default page
