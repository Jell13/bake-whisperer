import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"

const About = () => {

    const aboutRef = useRef(null)

    const isInView = useInView(aboutRef, {margin: "-50px", once: false})
    const wordVariants = {
        hidden: {y: 50, opacity: 0},
        visible: {y: 0, opacity: 1}
    }
    
    const staggerChildren = {
    visible: {
        transition: {
        staggerChildren: 0.1
        }
    }
    }

    const words = [
        "ABOUT",
        "US"
    ]
  return (
    <motion.div
    id='about'
    className='md:px-12 px-4 pt-32 mb-32'>
      <div className='w-full flex flex-col font-Open'>
        <motion.h3
        ref={aboutRef} 
        variants={staggerChildren}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='flex'>
            {[words.map((word, id) => (
                <motion.span 
                variants={wordVariants}
                key={id} className='text-[3rem] font-EB tracking-tighter text-walnut font-medium'>{word}&nbsp;</motion.span>
            ))]}
        </motion.h3>
        <div className='mt-8 text-secondary text-[1.5rem] tracking-tighter'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rerum aperiam at nesciunt facilis natus tempore, libero consequatur voluptas, quibusdam amet dolores autem? Quae enim voluptatum harum illum beatae? Aspernatur.</p>
        </div>
      </div>

    </motion.div>
  )
}

export default About
