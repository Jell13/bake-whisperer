"use client"

import React, { useState } from 'react'
import { motion } from  'motion/react'
import Image from 'next/image'

const DisplayBox = ({details}) => {

  const [hover, setHover] = useState()
  return (
    <div className='border-[1px] border-walnut font-Open' onMouseEnter={() => setHover(!hover)} onMouseLeave={() => setHover(!hover)}>
      <h1 className='px-2 py-2 font-Paris text-5xl text-walnut'>{details.name}</h1>
      <hr className='border-walnut'/>
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
      <hr className='border-walnut'/>
      <div className='px-2 mt-3 mb-3 flex justify-center'>
          <p className='font-EB tracking-tighter text-[2rem] text-walnut flex gap-8'>
            {details.price.length > 1 ? (
              details.price.map(({index, type, p}) => (
                <span key={index} className={`flex flex-col justify-center items-center ${index === 0 ? "border-r-[1px] pr-6 border-walnut" : ""}`}>
                  <span>{type}</span>
                  <span>{p}</span>
                </span>
              ))
            ) : (
              <span>
                {details.price[0]}
              </span>
            )}
          </p>
      </div>
      <hr className='border-walnut'/>
      <div className='px-2 mt-6 pb-4'>
        {/* <motion.img loading='lazy' animate={hover ? {scale: 1} : {scale: 0.8}} transition={{duration: 0.3, ease: "easeIn"}} className='rounded-2xl' src={details.images} alt=""/> */}
        <Image src={details.images} className='rounded-2xl' width={400} height={10} alt={details.images}/>
      </div>
    </div>
  )
}

export default DisplayBox
