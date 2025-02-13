import { Carousel } from '@/app/_components/Carousel'
import { NavBarScrollRouted } from '@/app/_components/Navbar'
import Info from '@/app/sections/Info'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col'>
      <NavBarScrollRouted/>
      <div className='w-full flex md:flex-row flex-col gap-8 px-8 py-8'>
        <div className='flex'>
          <Carousel/>
        </div>
        <div className='flex flex-col md:py-48 '>
          <h4 className='font-Corn text-6xl font-semibold tracking-tighter'>Fudgy Brownies (Original / Almond Sprinkled)</h4>
          <br />
          <p className='font-Open tracking-tighter max-w-[40rem] md:max-w-full text-xl'>Desc: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus molestias omnis hic asperiores in harum sapiente dolorum, adipisci fugit ratione inventore, necessitatibus pariatur tenetur sequi modi nesciunt rem fugiat.</p>
          <br />
          <br />
          <p className='font-Open text-3xl font-semibold'>$37</p>
          <div className='flex md:justify-end justify-center mt-10 relative'>
            <div className=''>
              <Image src={"/Bake_Whisperer.png"} width={200} height={200} alt='circle_text' className='animate-spin-slow'/>
            </div>
            <div className='bw-only absolute md:-translate-x-[53px] md:translate-y-[75px] translate-y-[75px] w-24 h-24 rounded-full bg-walnut'/>
          </div>
        </div>
      </div>
      <Info/>
    </div>
  )
}

export default page
