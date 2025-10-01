"use client"

import React, { useRef } from 'react'
import DisplayBox from '../_components/DisplayBox'
import { motion, useScroll, useTransform } from 'motion/react'

const Shop = () => {

  const tiramisu = {
    name: "Tiramisu",
    ingredients: ["Dairy", "Egg", "Flour"],
    images: "/tiramisu.jpg",
    price: ["$50"],
    path: "/pages/tiramisu"
  }

  const strawshort = {
    name: "Strawberry Shortcake",
    ingredients: ["Dairy", "Egg", "Flour"],
    images: "/strawshort.jpg",
    price: ["$50"],
    path: "/pages/strawberry"
  }

  const matcha = {
    name : "Matcha Cake",
    ingredients: ["Dairy", "Egg", "Flour"],
    images: "/matcha.jpg",
    price: ["$50"],
    path: "/pages/matcha"
  }

  const cream = {
    name: "Cream Puffs",
    ingredients: ["Dairy", "Egg", "Flour"],
    images: "/cream_puffs.jpg",
    price: ["12 Pieces", " $33"],
    path: "/pages/cream-puffs"
  }

  const brownies = {
    name: "Fudgy Brownies",
    ingredients: ["Dairy", "Egg", "Flour", "Tree Nuts"],
    images: "/brown.jpg",
    price: ["$22 /", " $24"],
    path: "/pages/brownies"
  }

  const cheese = {
    name: "Basque Burnt Cheesecake",
    ingredients: ["Dairy", "Egg", " Flour"],
    images: "/cheese.jpg",
    price: ["$50"],
    path: "/pages/cheese"
  }

  const banoffee = {
    name: "Banofee Cake",
    ingredients: ["Dairy", "Egg", "Flour"],
    images: "/banoffee.jpg",
    price: ["$50"],
    path: "/pages/banoffee"
  }

  const shopRef = useRef()
  const { scrollYProgress } = useScroll({
    target: shopRef,
    offset: ["start end", "end start"]
  })

  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves up
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Moves down
  const col3Y = useTransform(scrollYProgress, [0, 1], [0, -300]); // Moves up slowly

  return (
    <motion.div 
    id='shop'
    ref={shopRef}
    className='md:pt-32 md:px-8 px-4 text-secondary'>
      <div className='md:grid hidden grid-cols-3 gap-x-6 pt-32 md:mb-48'>
        <motion.div 
        style={{ y: col1Y }}
        className='col-start-1 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={cream}/>
          <DisplayBox details={banoffee}/>
        </motion.div>
        <motion.div 
        style={{ y: col2Y }}
        className='col-start-2 col-span-1 flex flex-col gap-6 translate-y-48'>
          <h3 className='-translate-y-24 font-Corn text-walnut text-5xl font-semibold'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={brownies}/>
        </motion.div>
        <motion.div 
        style={{ y: col3Y }}
        className='col-start-3 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={matcha}/>
          <DisplayBox details={cheese}/>
        </motion.div>
      </div>
      <div className='md:hidden grid-cols-1 gap-y-6 md:pt-32 pt-12'>
        <motion.div 
          className='col-span-1 flex flex-col gap-6'>
          <h3 className='font-Corn text-walnut text-4xl font-semibold'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={brownies}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={cream}/>
          <DisplayBox details={banoffee}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={matcha}/>
          <DisplayBox details={cheese}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Shop
