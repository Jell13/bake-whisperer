import React from 'react'
import { motion } from 'motion/react'

const Special = () => {

    const special_ingredients = ["test", "marquee", "for", "ingredients", "animation"]

  return (
    <div id='special' className='md:pt-32 px-8'>
      <div className='border-[1px] border-walnut px-4 py-4 flex flex-col mt-32'>
        <h3 className='font-Corn text-[4rem] text-walnut'>Seasonal Special</h3>
        <hr className='border-walnut'/>
        <div className='flex overflow-hidden'>
            <motion.p 
            initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
            className='flex flex-shrink-0 justify-center items-center'>
            {special_ingredients.map((word, id) => (
                <span key={id} className='pr-40 tracking-tighter text-xl'>{word}</span>
            ))}
            </motion.p>
            <motion.p 
            initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, ease: 'linear', repeat: Infinity}}
            className='flex flex-shrink-0 justify-center items-center'>
            {special_ingredients.map((word, id) => (
                <span key={id} className='pr-40 tracking-tighter text-xl'>{word}</span>
            ))}
            </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Special
