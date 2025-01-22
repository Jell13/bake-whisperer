import React from 'react'
import DisplayBox from '../components/DisplayBox'

const Shop = () => {
  return (
    <div className='mt-32 px-8'>
      <div className='grid grid-cols-6 gap-x-6'>
        <div className='col-start-1 col-span-2'>
          <DisplayBox/>
        </div>
        <div className='col-start-3 col-span-2'>
          Display-2
        </div>
        <div className='col-start-5 col-span-2'>
          Display-3
        </div>
        <div className='col-start-1 col-span-2'>
          Display-4
        </div>
      </div>
    </div>
  )
}

export default Shop
