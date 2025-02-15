"use client"

import React, { useState } from 'react'
import { motion } from  'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const DisplayBox = ({details}) => {

  const [hover, setHover] = useState()
  return (
    <Link className='font-Open group' href={details.path}>
      <h1 className='px-2 py-2 font-Quicksand text-3xl flex-col font-medium text-walnut flex justify-between'>
        <span>{details.name}</span>
        <div className='flex gap-2'>
          {details.price.map((d, id) => (
            <span key={id} className='font-Open text-2xl '>
              {d}
            </span>
          ))}
        </div>
      </h1>
      {/* <hr className=''/> */}
      <div className='flex overflow-hidden'>
        <motion.p 
        initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
        className='flex flex-shrink-0 justify-center items-center'>
          {details.ingredients.map((word, id) => (
            <span key={id} className='pr-20 tracking-tighter text-xl'>{word}</span>
          ))}
        </motion.p>
        <motion.p 
        initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
        className='flex flex-shrink-0 justify-center items-center'>
          {details.ingredients.map((word, id) => (
            <span key={id} className='pr-20 tracking-tighter text-xl'>{word}</span>
          ))}
        </motion.p>
      </div>
      <div className='px-2 mt-6 pb-4'>
        {/* <motion.img loading='lazy' animate={hover ? {scale: 1} : {scale: 0.8}} transition={{duration: 0.3, ease: "easeIn"}} className='rounded-2xl' src={details.images} alt=""/> */}
        <Image src={details.images} className='rounded-2xl group-hover:scale-95 duration-300 xl:w-[700px]' width={400} height={10} alt={details.images}/>
      </div>
    </Link>
  )
}

export default DisplayBox
