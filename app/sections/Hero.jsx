// "use client"

// import React, { useEffect, useRef } from 'react'
// import { motion, useScroll, useTransform } from 'motion/react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'

// const Hero = ({startAnimation}) => {

//   const heroRef = useRef(null)
//   const timelineRef = useRef(null);

//   useGSAP(() => {

//     const t1 = gsap.timeline();

//     gsap.to(heroRef.current, {
//       opacity: 0,
//       y: 50
//     })

//     timelineRef.current = gsap.timeline({ paused: true })
    
//     timelineRef.current.to(heroRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.5,
//       ease: "power2.inOut",
//       delay: 0.2 // Small delay after loader finishes
//     })
//   })

//   useEffect(() => {
//     if (startAnimation && timelineRef.current) {
//       timelineRef.current.play()
//     }
//   }, [startAnimation])

//   return (
//     <div id='home' className='w-screen h-screen px-12 bg-'>
//       <div ref={heroRef} className='w-full h-full flex flex-col justify-center items-center relative'>
//         {/* MAIN TITLE SENTENCE */}
//         <div className='flex flex-col items-center gap-6'>
//           <h1 className='font-Corn font-semibold text-walnut md:text-7xl text-4xl text-center tracking-tighter '>Baked with <span className='text-[#c69c6d]'>Heart</span>, Served with Joy</h1>
//           <h2 className='font-Corn font-semibold text-walnut md:text-4xl text-2xl text-center'>Whispered stories in every bite</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

"use client"

import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = ({startAnimation}) => {
  const heroRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => setIsVisible(true), 200)
    }
  }, [startAnimation])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#shop')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id='home' className='relative w-screen h-screen overflow-hidden bg-soft'>
      {/* Subtle decorative elements */}
      <div className='absolute top-1/4 left-10 w-24 h-24 rounded-full bg-walnut/5 blur-3xl'></div>
      <div className='absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#c69c6d]/8 blur-3xl'></div>
      
      {/* Main content */}
      <div 
        ref={heroRef} 
        className={`relative z-10 w-full h-full flex flex-col justify-center items-center px-6 md:px-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Subtitle above main title */}
        <div className={`mb-3 transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <p className='font-Paris text-xl md:text-2xl text-walnut tracking-wide'>
            Artisan Bakery
          </p>
        </div>

        {/* Main title section - more compact */}
        <div className='flex flex-col items-center gap-4 max-w-4xl'>
          <h1 className={`font-Corn font-semibold text-walnut text-4xl md:text-6xl lg:text-7xl text-center tracking-tight leading-tight transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Baked with <span className='text-[#c69c6d] relative inline-block'>
              Heart
              <svg className='absolute -bottom-1 left-0 w-full h-2' viewBox='0 0 200 10' preserveAspectRatio='none'>
                <path d='M0,7 Q50,3 100,7 T200,7' fill='none' stroke='#c69c6d' strokeWidth='2' opacity='0.3'/>
              </svg>
            </span>,<br/>Served with Joy
          </h1>
          
          <h2 className={`font-Corn font-semibold text-walnut/90 text-lg md:text-2xl text-center max-w-xl transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Whispered stories in every bite
          </h2>

          {/* Compact CTA Buttons */}
          <div className={`mt-6 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="#shop"
              className='group relative px-6 py-3 bg-walnut text-soft font-Corn font-medium text-base md:text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg'
            >
              <span className='relative z-10'>Explore Menu</span>
              <div className='absolute inset-0 bg-[#c69c6d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
            </a>
            
            <a
              href="#about"
              className='px-6 py-3 border-2 border-walnut text-walnut font-Corn font-medium text-base md:text-lg rounded-full transition-all duration-300 hover:bg-walnut hover:text-soft hover:scale-105'
            >
              Our Story
            </a>
          </div>

          {/* Compact badges */}
          {/* <div className={`mt-8 flex items-center gap-6 md:gap-8 text-walnut/70 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className='flex flex-col items-center'>
              <p className='font-Corn font-bold text-xl md:text-2xl text-walnut'>15+</p>
              <p className='font-Corn text-xs md:text-sm'>Years</p>
            </div>
            <div className='w-px h-10 bg-walnut/20'></div>
            <div className='flex flex-col items-center'>
              <p className='font-Corn font-bold text-xl md:text-2xl text-walnut'>100%</p>
              <p className='font-Corn text-xs md:text-sm'>Fresh Daily</p>
            </div>
            <div className='w-px h-10 bg-walnut/20'></div>
            <div className='flex flex-col items-center'>
              <p className='font-Corn font-bold text-xl md:text-2xl text-walnut'>Local</p>
              <p className='font-Corn text-xs md:text-sm'>Ingredients</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero