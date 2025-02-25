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
import { NavBarScrollCart, NavBarScrollRouted } from '@/app/_components/Navbar';

const page = () => {

  const cakes = [
    {name: "Strawberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with strawberry confit, fresh cream, and strawberry slices", price: 37, image:"/strawshort.jpg"},
    {name: "Blueberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with blueberry confit, fresh cream, and blueberries", price: 37, image:"/blueberry.jpg"},
    {name: "Basque Burnt Cheesecake", desc: "Extra creamy burnt cheesecake", price: 37, image:"/cheese.jpg"},
    {name: "Tiramisu Cake", desc: "A light, soft, and airy coffee chiffon cake filled with mascarpone cream and dusted with cocoa powder", price: 37, image:"/tiramisu.jpg"}
  ]

  const puffs = [
    {name: "Original", desc: "", price: 16, image: "/puff_og.jpg"},
    {name: "Matcha", desc: "", price: 16, image: "/puff_matcha.jpg"},
    {name: "Chocolate Milk", desc: "", price: 16, image: "/puff_coco.jpg"}
  ]

  const brownies = [
    {name: "Fudgy Brownies", desc: "A fudgy & decadent brownies with a rich chocolate flavor", price: 22, image: "/brown.jpg"}
  ]
  return (
    <section className='flex flex-col'>
      <NavBarScrollCart/>
      <nav className='flex items-center justify-between pr-8 bg-soft'>
        <div className='flex gap-3 items-center'>
          <Link href={"/"}>
            <img src="/logo-bw.png" alt="" className='md:w-[150px] w-[100px]'/>
          </Link>
          <h2 className='font-Corn md:text-[3rem] text-[1.5rem] font-semibold text-walnut'>Online Ordering</h2>
        </div>
      </nav>
      <div className='flex px-12 justify-between gap-4'>
        <div className='flex flex-col w-full'>
          <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-medium'>Cakes</h3>
          <div className='grid md:grid-cols-3 grid-cols-2 w-full mt-5 gap-4'>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[0]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[1]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[2]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[3]}/>
            </div>
          </div>
          {/* <div className='grid grid-cols-3 w-full mt-8'>
            <div className='col-span-1'>
              <CartDisplayBox item={cakes[3]}/>
            </div>
            <div className='col-span-1'>
              &nbsp;
            </div>
            <div className='col-span-1'>
              &nbsp;
            </div>
          </div> */}
          <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-medium mt-10'>Cream Puffs</h3>
          <div className='grid md:grid-cols-3 grid-cols-2 w-full mt-8 gap-4'>
            <div className='col-span-1'>
              <CartDisplayBox item={puffs[0]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={puffs[1]}/>
            </div>
            <div className='col-span-1'>
              <CartDisplayBox item={puffs[2]}/>
            </div>
          </div>
          <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-medium mt-4'>Brownies</h3>
          <div className='grid grid-cols-3 w-full mt-8 gap-4'>
            <div className='col-span-1'>
              <CartDisplayBox item={brownies[0]}/>
            </div>
          </div>
        </div>
       <div className='w-1/2 md:flex hidden'>
        &nbsp;
       </div>
      </div>
    </section>
  )
}

export default page
