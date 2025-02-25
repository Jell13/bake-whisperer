"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const Hero = () => {

  const heroRef = useRef(null)
  const { scrollY } = useScroll(
    {
      target: heroRef,
      offset: ["start 0.25", "end 0.75"]
    },
  )

  const opacity = useTransform(
    scrollY,
    [0, 200],
    [1, 0]
  )

  return (
    <div id='home' className='bg-hero w-screen h-screen px-12'>
      <motion.div ref={heroRef} style={{opacity}} className='w-full h-full flex flex-col justify-end items-center relative'>
      </motion.div>
    </div>
  )
}

export default Hero
