"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = ({startAnimation}) => {

  const heroRef = useRef(null)
  const timelineRef = useRef(null);

  useGSAP(() => {

    const t1 = gsap.timeline();

    gsap.to(heroRef.current, {
      opacity: 0,
      y: 50
    })

    timelineRef.current = gsap.timeline({ paused: true })
    
    timelineRef.current.to(heroRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.2 // Small delay after loader finishes
    })
  })

  useEffect(() => {
    if (startAnimation && timelineRef.current) {
      timelineRef.current.play()
    }
  }, [startAnimation])

  return (
    <div id='home' className='w-screen h-screen px-12 bg-'>
      <div ref={heroRef} className='w-full h-full flex flex-col justify-center items-center relative'>
        {/* MAIN TITLE SENTENCE */}
        <div className='flex flex-col items-center gap-6'>
          <h1 className='font-Corn font-semibold text-walnut md:text-7xl text-4xl text-center tracking-tighter '>Baked with <span className='text-[#c69c6d]'>Heart</span>, Served with Joy</h1>
          <h2 className='font-Corn font-semibold text-walnut md:text-4xl text-2xl text-center'>Whispered stories in every bite</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
