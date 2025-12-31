"use client"

import React, { useState } from 'react'
import { motion } from 'motion/react'
// import Image from 'next/image'
import Link from 'next/link'

const DisplayBox = ({ details }) => {

    const [hover, setHover] = useState()
    return (
        // <Link className='font-Open group' href={details.path}>
        //   <h1 className='px-2 py-2 font-Quicksand text-3xl flex-col font-medium text-walnut flex justify-between'>
        //     <span>{details.name}</span>
        //     <div className='flex gap-2'>
        //       {details.price.map((d, id) => (
        //         <span key={id} className='font-Open text-2xl '>
        //           {d}
        //         </span>
        //       ))}
        //     </div>
        //   </h1>
        //   {/* <hr className=''/> */}
        //   <div className='flex overflow-hidden'>
        //     <motion.p 
        //     initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
        //     className='flex flex-shrink-0 justify-center items-center'>
        //       {details.ingredients.map((word, id) => (
        //         <span key={id} className='pr-20 tracking-tighter text-xl text-softer'>{word}</span>
        //       ))}
        //     </motion.p>
        //     <motion.p 
        //     initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
        //     className='flex flex-shrink-0 justify-center items-center'>
        //       {details.ingredients.map((word, id) => (
        //         <span key={id} className='pr-20 tracking-tighter text-xl text-softer'>{word}</span>
        //       ))}
        //     </motion.p>
        //   </div>
        //   <div className='px-2 mt-6 pb-4'>
        //     {/* <motion.img loading='lazy' animate={hover ? {scale: 1} : {scale: 0.8}} transition={{duration: 0.3, ease: "easeIn"}} className='rounded-2xl' src={details.images} alt=""/> */}
        //     <img src={details.images} className='rounded-2xl group-hover:scale-95 duration-300 xl:w-[700px]' width={400} height={10} alt={details.images}/>
        //   </div>
        // </Link>
        <Link className='font-Open group block' href={details.path}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className='relative'
            >
                {/* Image Container */}
                <div className='relative w-full aspect-[3/4] overflow-hidden rounded-3xl mb-6'>
                    <img
                        src={details.images}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                        alt={details.name}
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className='absolute inset-0 bg-gradient-to-t from-walnut/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                </div>

                {/* Product Info */}
                <div className='space-y-2'>
                    <div className='flex justify-between items-start'>
                        <h3 className='font-Quicksand text-2xl font-medium text-walnut pr-4'>
                            {details.name}
                        </h3>
                        <span className='font-Open text-xl text-walnut font-semibold whitespace-nowrap'>
                            {details.price[0]}
                        </span>
                    </div>

                    {/* Scrolling ingredients */}
                    <div className='flex overflow-hidden'>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                            className='flex flex-shrink-0 items-center gap-12'
                        >
                            {details.ingredients.map((word, id) => (
                                <span key={id} className='text-lg text-softer tracking-wide uppercase'>
                                    {word}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                            className='flex flex-shrink-0 items-center gap-12 ml-12'
                        >
                            {details.ingredients.map((word, id) => (
                                <span key={id} className='text-lg text-softer tracking-wide uppercase'>
                                    {word}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default DisplayBox
