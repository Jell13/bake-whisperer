import CartDisplayBox from '@/app/_components/CartDisplayBox'
import Link from 'next/link'
import { ReactLenis } from 'lenis/react'
import React from 'react'
import { NavBarScrollCart } from '@/app/_components/Navbar';
import { HiOutlineChevronLeft } from 'react-icons/hi2';

const page = () => {

  const cakes = [
    {name: "Strawberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with strawberry confit, fresh cream, and strawberry slices", price: 37, image:"/strawshort.jpg", type: "cake", id: "straw-01"},
    {name: "Blueberry Shortcake", desc: "A light, soft, and airy chiffon cake filled with blueberry confit, fresh cream, and blueberries", price: 37, image:"/blueberry.jpg", type: "cake", id: "blue-01"},
    {name: "Basque Burnt Cheesecake", desc: "Extra creamy burnt cheesecake", price: 37, image:"/cheese.jpg", type: "cake", id: "cheese"},
    {name: "Tiramisu Cake", desc: "A light, soft, and airy coffee chiffon cake filled with mascarpone cream and dusted with cocoa powder", price: 37, image:"/tiramisu.jpg", type: "cake", id: "tira-01"}
  ]

  const puffs = [
    {name: "Cream Puff Original", desc: "", price: 33, image: "/puff_og.jpg", type: "puff", id: "puff_og"},
    {name: "Cream Puff Matcha", desc: "", price: 33, image: "/puff_matcha.jpg", type: "puff", id: "puff_matcha"},
    {name: "Cream Puff Chocolate Milk", desc: "", price: 33, image: "/puff_coco.jpg", type: "puff", id: "puff_choco"}
  ]

  const brownies = [
    {name: "Fudgy Brownies", desc: "A fudgy & decadent brownies with a rich chocolate flavor", price: 22, image: "/brown.jpg", type: "brown", id: "brownies"}
  ]
  return (
    <ReactLenis root>
      <section className='flex flex-col text-softer py-6'>
        <NavBarScrollCart/>
        <nav className='flex items-center justify-between px-8 bg-soft'>
          <div className='flex gap-3 items-center'>
            <Link href={"/"}>
              <div className='flex items-center p-2 py-1 border-[1px] text-[1rem] border-walnut text-walnut font-Open rounded-xl hover:bg-walnut hover:text-beige duration-300'>
                  <HiOutlineChevronLeft/>
                  <p>Back</p>
              </div>
            </Link>
            <h2 className='font-Corn md:text-[3rem] text-[1.5rem] font-semibold text-walnut tracking-tighter'>Online Ordering</h2>
          </div>
        </nav>
        <div className='flex px-12 justify-between gap-4'>
          <div className='flex flex-col w-full'>
            <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-semibold tracking-tighter'>Cakes</h3>
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
            <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-semibold mt-10 tracking tighter'>Cream Puffs</h3>
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
            <h3 className='font-Corn text-walnut md:text-[2.5rem] text-[2rem] font-semibold tracking-tighter mt-4'>Brownies</h3>
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
    </ReactLenis>
  )
}

export default page
