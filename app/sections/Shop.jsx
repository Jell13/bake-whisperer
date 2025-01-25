import React from 'react'
import DisplayBox from '../components/DisplayBox'

const Shop = () => {

  const tiramisu = {
    name: "Tiramisu",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/tiramisu.jpg"
  }

  const strawshort = {
    name: "Strawberry Shortcake",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/strawshort.jpg"
  }

  const blueberry = {
    name : "Blueberry Shortcake",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/blueberry.jpg"
  }

  return (
    <div className='mt-32 px-8 text-secondary'>
      <div className='grid grid-cols-3 gap-x-6'>
        <div className='col-start-1 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={strawshort}/>
        </div>
        <div className='col-start-2 col-span-1 flex flex-col gap-6 translate-y-48'>
          <h3 className='-translate-y-32 font-EB text-walnut text-4xl font-medium'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={strawshort}/>
        </div>
        <div className='col-start-3 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={blueberry}/>
        </div>
      </div>
    </div>
  )
}

export default Shop
