"use client"

import React, { useState } from 'react'
import { motion } from  'motion/react'
import Image from 'next/image'

const DisplayBox = () => {

  const [hover, setHover] = useState(false)
  return (
    <div className='border-[1px] border-walnut font-Open' onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
      <h1 className='px-2 py-2 font-Paris text-5xl'>Tiramisu</h1>
      <hr className='border-walnut'/>
      <div className='flex overflow-hidden'>
        <motion.p 
        initial={{x: 0}} animate={hover ? {x: "-100%"} : {x: 0}} transition={{duration: hover ? 10 : 0, ease: 'linear', repeat: hover ? Infinity : 0}}
        className='flex flex-shrink-0 justify-center items-center'>
          {["test", "marquee", "for", "ingredients", "animation"].map((word, id) => (
            <span key={id} className='pr-20 tracking-tighter text-xl'>{word}</span>
          ))}
        </motion.p>
        <motion.p 
        initial={{x: 0}} animate={hover ? {x: "-100%"} : {}} transition={{duration: hover ? 10 : 0, ease: 'linear', repeat: hover ? Infinity : 0}}
        className='flex flex-shrink-0 justify-center items-center'>
          {["test", "marquee", "for", "ingredients", "animation"].map((word, id) => (
            <span key={id} className='pr-20 tracking-tighter text-xl'>{word}</span>
          ))}
        </motion.p>
      </div>
      <hr className='border-walnut'/>
      <div className='px-2 mt-6 pb-4'>
        <motion.img animate={hover ? {scale: 1} : {scale: 0.8}} transition={{duration: 0.3, ease: "easeIn"}} className='rounded-2xl' src="/tiramisu.jpg" alt=""/>
        {/* <Image src="/tiramisu.jpg"  alt='tiramisu'/> */}
      </div>
    </div>
  )
}

export default DisplayBox
