import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <div id='info' className='bg-secondary rounded-t-3xl px-12 py-12'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h3 className='font-EB text-[3rem] tracking-tighter font-semibold text-walnut'>
            Butter & Bliss
          </h3>
          <h4 className='mt-5 font-Open tracking-tighter font-bold text-[3.5rem] text-walnut'>
            A Haven for the Sweet Tooths
          </h4>
        </div>
        <div className='flex justify-start'>
          <div className='font-Open tracking-tighter text-walnut flex flex-col'>
            <h5 className='font-medium'>Follow us and Contact us:</h5>
            <div className='flex flex-col'>
              <Link href={"/"} className='group relative'>
                Instagram
                <span className='border-b-[1px] border-walnut absolute left-0 w-full'>&nbsp;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
