import React, { useRef } from 'react'
import { motion, useInView } from "motion/react"
import Image from 'next/image'

const About = () => {

    const aboutRef = useRef(null)

    const isInView = useInView(aboutRef, {margin: "-50px", once: true})
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
                key={id} className='md:text-[3rem] text-4xl font-Corn tracking-tighter text-walnut font-semibold'>{word}&nbsp;</motion.span>
            ))]}
        </motion.h3>
        <div className='mt-8 text-softer text-[1.5rem] tracking-tighter'>
            <p>At Bake Whisperer, we believe that every baked good tells a story — and we&apos;re here to make sure it&apos;s a delicious one. We&apos;re a small, heart-driven bakery with a big passion for creating sweet moments and unforgettable flavors.</p>
            <br />
            <p>What started as a humble kitchen dream has grown into a cozy corner where quality ingredients, time-honored recipes, and a touch of creativity come together. Whether it&apos;s a batch of perfectly baked choux / cream puff, a fluffy chiffon cake for your special celebration, or some pastries to brighten your morning, everything we make is handcrafted with care.</p>
            <br />
            <p>We whisper love into every dough, swirl, and sprinkle — because to us, baking is more than a business, it&apos;s a way to bring people together</p>
        </div>

        <div className='flex md:justify-end justify-center mt-10 relative'>
          <div className=''>
            <Image src={"/Bake_Whisperer.png"} width={200} height={200} alt='circle_text' className='animate-spin-slow'/>
          </div>
          <div className='bw-only absolute md:-translate-x-[53px] md:translate-y-[75px] translate-y-[75px] w-24 h-24 rounded-full bg-walnut'/>
        </div>
      </div>

    </motion.div>
  )
}

export default About
