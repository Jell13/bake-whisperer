"use client"

import React, { useEffect } from 'react'
import { m, motion } from "motion/react"
import Image from 'next/image'
// import Image from 'next/image'

const Loader = ({setLoading}) => {

    const strawberry = {
      id: 1,
      img: "/intro/st1.jpg",
    }

    const tiramisu = {
      id: 2,
      img: "/intro/tm1.jpg",
    }

    const cheese = {
      id: 3,
      img: "/intro/chs1.jpg",
    }

    const brown = {
      id: 4,
      img: "/intro/bwn1.jpg",
    }

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
            ease: "easeInOut",
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
    <motion.div className='w-full h-screen flex justify-center items-center relative'>
      <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className='w-full flex justify-center items-center'>
        <ImageBlock1 variants={item} details={strawberry}/>
        <ImageBlock4 variants={item} details={brown}/>
        <motion.div
        className='absolute'
        variants={itemMain}
        >
          {/* <motion.h1 layoutId="main-title" className='font-EB md:text-[3rem] text-[2rem] font-medium tracking-tighter text-walnut'>Bake Whisperer</motion.h1> */}
          
          <motion.img className="md:w-[400px] w-[200px]" layoutId="main-title" src="/logo-bw.png"/>
        </motion.div>
        <ImageBlock2 variants={item} details={tiramisu}/>
        <ImageBlock3 variants={item} details={cheese}/>
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock1 = ({variants, details}) => {
    return (
      <motion.div
      variants={variants}
      className='absolute'
      >
        <Image
          width={200}
          height={10}
          className={`md:w-[200px] w-[100px] rounded-xl md:-translate-x-64 md:-translate-y-24 -translate-x-24 -translate-y-20`}
          src={details.img}
          alt={details.id}
        />
      </motion.div>
    )
}

export const ImageBlock2 = ({variants, details}) => {
  return (
    <motion.div
    variants={variants}
    className='absolute'
    >
      <Image
        className={`md:w-[150px] w-[90px] rounded-xl md:translate-x-64 md:-translate-y-36 translate-x-24 -translate-y-28`}
        width={200}
        height={10}
        src={details.img}
        alt={details.id}
      />
    </motion.div>
  )
}

export const ImageBlock3 = ({variants, details}) => {
  return (
    <motion.div
    variants={variants}
    className='absolute'
    >
      <Image
        width={100}
        height={10}
        className={`md:w-[150px] w-[100px] rounded-xl md:translate-x-52 md:translate-y-52 translate-x-20 translate-y-24`}
        src={details.img}
        alt={details.id}
      />
    </motion.div>
  )
}

export const ImageBlock4 = ({variants, details}) => {
  return (
    <motion.div
    variants={variants}
    className='absolute'
    >
      <Image
        width={100}
        height={10}
        className={`md:w-[150px] w-[90px] rounded-xl md:-translate-x-72 md:translate-y-52 -translate-x-28 translate-y-32`}
        src={details.img}
        alt={details.id}
      />
    </motion.div>
  )
}
export default Loader
