import { Carousel } from '@/app/_components/Carousel'
import Navbar from '@/app/_components/Navbar'
import { NavBarScroll } from '@/app/_components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='py-8 px-8 w-full flex flex-col'>
      <NavBarScroll/>
      <Link href={"/"}>Back</Link>
      <div className='w-full flex gap-8'>
        <div className=''>
          <Carousel/>
        </div>
        <div className='flex flex-col py-48 '>
          <h4 className='font-Corn text-6xl font-semibold tracking-tighter'>Strawberry Shortcake</h4>
          <br />
          <p className='font-Open tracking-tighter max-w-[40rem] text-xl'>Desc: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus molestias omnis hic asperiores in harum sapiente dolorum, adipisci fugit ratione inventore, necessitatibus pariatur tenetur sequi modi nesciunt rem fugiat.</p>
          <br />
          <br />
          <p className='font-Open text-3xl font-semibold'>$37</p>
        </div>
      </div>
    </div>
  )
}

export default page
