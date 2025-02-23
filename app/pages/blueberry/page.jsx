import { Carousel } from '@/app/_components/Carousel'
import { NavBarScrollRouted } from '@/app/_components/Navbar'
import Info from '@/app/sections/Info'
import Image from 'next/image'
import React from 'react'
import { ReactLenis } from 'lenis/react'

const page = () => {

  const slides = [
    "/blueberry.jpg",
    "/brown.jpg",
    "/cheese.jpg"
  ];
  
  return (
    <ReactLenis root>
      <div className=' flex flex-col'>
        <NavBarScrollRouted/>
        <div className='w-full flex md:flex-row flex-col gap-8 px-8'>
          <div className='flex'>
            <Carousel slides={slides}/>
          </div>
          <div className='flex flex-col md:py-48 text-walnut'>
            <h4 className='font-Corn text-6xl font-semibold tracking-tighter'>Blueberry Shortcake</h4>
            <br />
            <div> 
              <p className='font-Open tracking-tighter max-w-[40rem] md:max-w-full text-xl'>A light, soft, and airy chiffon cake filled with blueberry confit, fresh cream, and blueberries</p>
              <p>Size: 6 inch diameter</p>
            </div>
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
    </ReactLenis>
  )
}

export default page
