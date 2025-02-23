import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <div id='info' className='bg-secondary rounded-t-3xl px-12 pt-12'>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-10'>
          <h3 className='font-Corn text-[3rem] tracking-tighter font-semibold text-walnut'>
            Sweet Whispers
          </h3>
          <h4 className='mt-5 font-Open tracking-tighter font-bold md:text-[3.5rem] text-[2rem] text-walnut'>
            {/* A Haven for the Sweet Tooths */}
            Indulge in Sweet Perfection.
            {/* Life is Short, Eat More Cake. */}
          </h4>
        </div>
        <div className=' w-full flex flex-col mb-4'>
          <Link href={"/pages/online-order"} className='border-2 border-walnut hover:bg-walnut hover:text-beige duration-300 p-4 text-walnut rounded-lg w-full md:text-[2rem] text-[2rem] flex justify-center'>Order Online</Link>
          {/* Links */}
          <div className='md:grid grid-cols-3 md:gap-8 mt-10 flex flex-col'>
            <div className='col-start-1'>
              <p className='font-Corn md:text-[2rem] text-[1.5rem] text-walnut font-bold'>&copy;Bake Whisperer</p>
            </div>
            <div className='col-start-2 flex md:justify-center'>
              <a href="" className='font-Corn md:text-[2rem] text-[1.5rem] text-walnut font-bold'>Instagram</a>
            </div>
            <div className='col-start-3 flex md:justify-end'>
              <p className='font-Corn md:text-[2rem] text-[1.5rem] text-walnut font-bold'>Code by @Jason</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
