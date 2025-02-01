"use client"

import React, { useRef } from 'react'
import DisplayBox from '../components/DisplayBox'
import { motion, useScroll, useTransform } from 'motion/react'

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

  const cream = {
    name: "Cream Puffs",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/cream_puffs.jpg"
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
    className='md:pt-32 px-8 text-secondary'>
      <div className='md:grid hidden grid-cols-3 gap-x-6 pt-32 md:mb-48'>
        <motion.div 
        style={{ y: col1Y }}
        className='col-start-1 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={cream}/>
        </motion.div>
        <motion.div 
        style={{ y: col2Y }}
        className='col-start-2 col-span-1 flex flex-col gap-6 translate-y-48'>
          <h3 className='-translate-y-24 font-EB text-walnut text-4xl font-medium'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={strawshort}/>
        </motion.div>
        <motion.div 
        style={{ y: col3Y }}
        className='col-start-3 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={blueberry}/>
        </motion.div>
      </div>
      <div className='md:hidden grid-cols-1 gap-y-6 md:pt-32 pt-12'>
        <motion.div 
          className='col-span-1 flex flex-col gap-6'>
          <h3 className='font-EB text-walnut text-4xl font-medium'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={strawshort}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={strawshort}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={blueberry}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Shop
