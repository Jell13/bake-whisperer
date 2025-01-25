"use client"

import React, { useEffect } from 'react'
import { motion } from "motion/react"

const Loader = ({setLoading}) => {

    const container = {
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.17, 0.67, 0.83, 0.67],
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      };

      const itemMain = {
        hidden: { opacity: 0, y: 200 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.25, 0.1, 0.25, 1],
            duration: 1.2,
          },
        },
      };

  return (
    <motion.div className='w-full h-screen flex justify-center items-center'>
      <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className='w-full flex justify-center items-center'>
        <motion.div
        className=''
        variants={itemMain}
        >
          <motion.h1 layoutId="main-title" className='font-EB md:text-[3rem] text-[2rem] font-bold tracking-tighter text-walnut'>Bake Whisperer</motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({src}) => {
    return (
        <div className=''>
            <img src={src} alt="" />
        </div>
    )
}

export default Loader
