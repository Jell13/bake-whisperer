import Link from 'next/link'
import React from 'react'

const Info = () => {
  return (
    <div id='info' className='bg-secondary rounded-t-3xl px-12 pt-12'>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-10'>
          <h3 className='font-EB text-[3rem] tracking-tighter font-semibold text-walnut'>
            Bake & Bliss
          </h3>
          <h4 className='mt-5 font-Open tracking-tighter font-bold text-[3.5rem] text-walnut'>
            A Haven for the Sweet Tooths
          </h4>
        </div>
        {/* <div className='flex justify-start mt-10'>
          <div className='font-Open tracking-tighter text-walnut flex flex-col'>
            <h5 className='font-medium mb-5'>Follow and Contact us:</h5>
            <div className='flex flex-col'>
              <Link href={"/"} className='group relative'>
                <p className='group relative inline-block'>
                  Instagram
                  <span className='border-b-[1px] border-walnut absolute left-0 w-0 group-hover:w-full duration-300'>&nbsp;</span>
                </p>  
              </Link>
              <Link href={"/"} className='group relative'>
                <p className='group relative inline-block'>
                  Instagram
                  <span className='border-b-[1px] border-walnut absolute left-0 w-0 group-hover:w-full duration-300'>&nbsp;</span>
                </p> 
              </Link>
            </div>
          </div>
        </div> */}
        <div className='border-t-2 border-l-2 border-r-2 border-walnut py-2 px-3'>
          
        </div>

      </div>
    </div>
  )
}

export default Info
