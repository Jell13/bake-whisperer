"use client"

import React, { useRef } from 'react'
import DisplayBox from '../_components/DisplayBox'
import { motion, useScroll, useTransform } from 'motion/react'

const Shop = () => {

  const tiramisu = {
    name: "Tiramisu",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/tiramisu.jpg",
    price: ["$37"],
    path: "/pages/tiramisu"
  }

  const strawshort = {
    name: "Strawberry Shortcake",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/strawshort.jpg",
    price: ["$37"],
    path: "/pages/strawberry"
  }

  const blueberry = {
    name : "Blueberry Shortcake",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/blueberry.jpg",
    price: ["$37"],
    path: "/pages/blueberry"
  }

  const cream = {
    name: "Cream Puffs",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/cream_puffs.jpg",
    price: ["$37"],
    path: "/pages/cream-puffs"
  }

  const brownies = {
    name: "Fudgy Brownies",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/brown.jpg",
    price: [{index: 0,type: "Original",p: "$22"}, {index: 1,type: "Almond Sprinkled", p: "$24"}],
    path: "/pages/brownies"
  }

  const cheese = {
    name: "Basque Burnt Cheesecake",
    ingredients: ["test", "marquee", "for", "ingredients", "animation"],
    images: "/cheese.jpg",
    price: ["$30"],
    path: "/pages/cheese"
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
          <h3 className='-translate-y-24 font-Corn text-walnut text-5xl font-medium'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={brownies}/>
        </motion.div>
        <motion.div 
        style={{ y: col3Y }}
        className='col-start-3 col-span-1 flex flex-col gap-6 translate-y-12'>
          <DisplayBox details={blueberry}/>
          <DisplayBox details={cheese}/>
        </motion.div>
      </div>
      <div className='md:hidden grid-cols-1 gap-y-6 md:pt-32 pt-12'>
        <motion.div 
          className='col-span-1 flex flex-col gap-6'>
          <h3 className='font-Corn text-walnut text-4xl font-medium'>OUR <span>FRESH</span> BAKED PRODUCTS</h3>
          <DisplayBox details={strawshort}/>
          <DisplayBox details={brownies}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={tiramisu}/>
          <DisplayBox details={cream}/>
        </motion.div>
        <motion.div 
        className='col-span-1 flex flex-col gap-6 mt-6'>
          <DisplayBox details={blueberry}/>
          <DisplayBox details={cheese}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Shop
