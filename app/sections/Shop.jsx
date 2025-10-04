"use client"

import React, { useRef } from 'react'
import DisplayBox from '../_components/DisplayBox'
import { motion, useScroll, useTransform } from 'motion/react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const Shop = () => {

  const menu = useQuery(api.menu.getMenu);
  // const tiramisu = {
  //   name: "Tiramisu",
  //   ingredients: ["Dairy", "Egg", "Flour"],
  //   images: "/tiramisu.jpg",
  //   price: ["$50"],
  //   path: "/pages/tiramisu"
  // }

  // const strawshort = {
  //   name: "Strawberry Shortcake",
  //   ingredients: ["Dairy", "Egg", "Flour"],
  //   images: "/strawshort.jpg",
  //   price: ["$50"],
  //   path: "/pages/strawberry"
  // }

  // const matcha = {
  //   name : "Matcha Cake",
  //   ingredients: ["Dairy", "Egg", "Flour"],
  //   images: "/matcha.jpg",
  //   price: ["$50"],
  //   path: "/pages/matcha"
  // }

  // const cream = {
  //   name: "Cream Puffs",
  //   ingredients: ["Dairy", "Egg", "Flour"],
  //   images: "/cream_puffs.jpg",
  //   price: ["12 Pieces", " $36"],
  //   path: "/pages/cream-puffs"
  // }

  // const brownies = {
  //   name: "Fudgy Brownies",
  //   ingredients: ["Dairy", "Egg", "Flour", "Tree Nuts"],
  //   images: "/brown.jpg",
  //   price: ["$30 /", " $32"],
  //   path: "/pages/brownies"
  // }

  // const cheese = {
  //   name: "Basque Burnt Cheesecake",
  //   ingredients: ["Dairy", "Egg", " Flour"],
  //   images: "/cheese.jpg",
  //   price: ["$50"],
  //   path: "/pages/cheese"
  // }

  // const banoffee = {
  //   name: "Banofee Cake",
  //   ingredients: ["Dairy", "Egg", "Flour"],
  //   images: "/banoffee.jpg",
  //   price: ["$50"],
  //   path: "/pages/banoffee"
  // }

  const shopRef = useRef()
  const { scrollYProgress } = useScroll({
    target: shopRef,
    offset: ["start end", "end start"]
  })

  const col1Y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves up
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);  // Moves down
  const col3Y = useTransform(scrollYProgress, [0, 1], [0, -300]); // Moves up slowly

  const distributeItems = (items) => {
    if (!items || items.length === 0) return [[], [], []];
    
    const col1 = [];
    const col2 = [];
    const col3 = [];
    
    items.forEach((item, index) => {
      if (index % 3 === 0) {
        col1.push(item);
      } else if (index % 3 === 1) {
        col2.push(item);
      } else {
        col3.push(item);
      }
    });
    
    return [col1, col2, col3];
  };

  // Transform menu data to match DisplayBox format
  const transformMenuItem = (item) => ({
    name: item.name,
    desc: item.desc,
    ingredients: item.ingredients || [],
    images: item.frontImage || "",
    price: [`$${item.price}`],
    path: `/pages/${item._id}`
  });

  if (!menu) {
    return (
      <div className='md:pt-32 md:px-8 px-4 text-secondary flex items-center justify-center min-h-screen'>
        <p className="text-xl text-gray-500">Loading menu...</p>
      </div>
    );
  }

  const [col1Items, col2Items, col3Items] = distributeItems(menu);

  return (
    <motion.div 
      id='shop'
      ref={shopRef}
      className='md:pt-32 md:px-8 px-4 text-secondary'>
      
      {/* Desktop View */}
      <div className='md:grid hidden grid-cols-3 gap-x-6 pt-32 md:mb-48'>
        <motion.div 
          style={{ y: col1Y }}
          className='col-start-1 col-span-1 flex flex-col gap-6 translate-y-12'>
          {col1Items.map((item, index) => (
            <DisplayBox key={item._id || index} details={transformMenuItem(item)} />
          ))}
        </motion.div>
        
        <motion.div 
          style={{ y: col2Y }}
          className='col-start-2 col-span-1 flex flex-col gap-6 translate-y-48'>
          <h3 className='-translate-y-24 font-Corn text-walnut text-5xl font-semibold'>
            OUR <span>FRESH</span> BAKED PRODUCTS
          </h3>
          {col2Items.map((item, index) => (
            <DisplayBox key={item._id || index} details={transformMenuItem(item)} />
          ))}
        </motion.div>
        
        <motion.div 
          style={{ y: col3Y }}
          className='col-start-3 col-span-1 flex flex-col gap-6 translate-y-12'>
          {col3Items.map((item, index) => (
            <DisplayBox key={item._id || index} details={transformMenuItem(item)} />
          ))}
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex flex-col gap-y-6 md:pt-32 pt-12'>
        <motion.div className='flex flex-col gap-6'>
          <h3 className='font-Corn text-walnut text-4xl font-semibold'>
            OUR <span>FRESH</span> BAKED PRODUCTS
          </h3>
          {menu.map((item, index) => (
            <DisplayBox key={item._id || index} details={transformMenuItem(item)} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Shop
