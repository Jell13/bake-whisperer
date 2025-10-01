// "use client"

// import React, { useEffect } from 'react'
// import { m, motion } from "motion/react"
// import Image from 'next/image'
// // import Image from 'next/image'

// const Loader = ({setLoading}) => {

//     const strawberry = {
//       id: 1,
//       img: "/intro/st1.jpg",
//     }

//     const tiramisu = {
//       id: 2,
//       img: "/intro/tm1.jpg",
//     }

//     const cheese = {
//       id: 3,
//       img: "/intro/chs1.jpg",
//     }

//     const brown = {
//       id: 4,
//       img: "/intro/bwn1.jpg",
//     }

//     const container = {
//         show: {
//           transition: {
//             staggerChildren: 0.2,
//           },
//         },
//       };
      
//       const item = {
//         hidden: { opacity: 0, y: 200 },
//         show: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             ease: "easeInOut",
//             duration: 0.8,
//           },
//         },
//         exit: {
//           opacity: 0,
//           y: -200,
//           transition: {
//             ease: "easeInOut",
//             duration: 0.5,
//           },
//         },
//       };

//       const itemMain = {
//         hidden: { opacity: 0, y: 200 },
//         show: {
//           opacity: 1,
//           y: 0,
//           transition: {
//             ease: [0.25, 0.1, 0.25, 1],
//             duration: 0.6,
//           },
//         },
//       };

//   return (
//     <motion.div className='w-full h-screen inset-0 flex justify-center items-center relative'>
//       <motion.div 
//       variants={container}
//       initial="hidden"
//       animate="show"
//       exit="exit"
//       onAnimationComplete={() => setLoading(false)}
//       className='w-full flex justify-center items-center'>
//         <ImageBlock1 variants={item} details={strawberry}/>
//         <ImageBlock4 variants={item} details={brown}/>
//         <motion.div
//         className='absolute'
//         variants={itemMain}
//         >
//           {/* <motion.h1 layoutId="main-title" className='font-EB md:text-[3rem] text-[2rem] font-medium tracking-tighter text-walnut'>Bake Whisperer</motion.h1> */}
          
//           <motion.img className="md:w-[400px] w-[200px]" layoutId="main-title" src="/logo-bw.png"/>
//         </motion.div>
//         <ImageBlock2 variants={item} details={tiramisu}/>
//         <ImageBlock3 variants={item} details={cheese}/>
//       </motion.div>
//     </motion.div>
//   )
// }

// export const ImageBlock1 = ({variants, details}) => {
//     return (
//       <motion.div
//       variants={variants}
//       className='absolute'
//       >
//         <Image
//           width={200}
//           height={10}
//           className={`md:w-[200px] w-[100px] rounded-xl md:-translate-x-64 md:-translate-y-24 -translate-x-24 -translate-y-20`}
//           src={details.img}
//           alt={details.id}
//         />
//       </motion.div>
//     )
// }

// export const ImageBlock2 = ({variants, details}) => {
//   return (
//     <motion.div
//     variants={variants}
//     className='absolute'
//     >
//       <Image
//         className={`md:w-[150px] w-[90px] rounded-xl md:translate-x-64 md:-translate-y-36 translate-x-24 -translate-y-28`}
//         width={200}
//         height={10}
//         src={details.img}
//         alt={details.id}
//       />
//     </motion.div>
//   )
// }

// export const ImageBlock3 = ({variants, details}) => {
//   return (
//     <motion.div
//     variants={variants}
//     className='absolute'
//     >
//       <Image
//         width={100}
//         height={10}
//         className={`md:w-[150px] w-[100px] rounded-xl md:translate-x-52 md:translate-y-52 translate-x-20 translate-y-24`}
//         src={details.img}
//         alt={details.id}
//       />
//     </motion.div>
//   )
// }

// export const ImageBlock4 = ({variants, details}) => {
//   return (
//     <motion.div
//     variants={variants}
//     className='absolute'
//     >
//       <Image
//         width={100}
//         height={10}
//         className={`md:w-[150px] w-[90px] rounded-xl md:-translate-x-72 md:translate-y-52 -translate-x-28 translate-y-32`}
//         src={details.img}
//         alt={details.id}
//       />
//     </motion.div>
//   )
// }
// export default Loader

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GSAPLoader = ({ setLoading }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set container to full screen initially
    gsap.set(containerRef.current, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      backgroundColor: '#DDD1C5', // Light background like your site
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    // Set initial positions - images start from bottom of screen
    gsap.set(imagesRef.current, { 
      y: window.innerHeight, // Start from bottom of viewport
      opacity: 1,
      scale: 0.8
    });

    // Set logo initial state
    gsap.set(logoRef.current, {
      opacity: 0,
      scale: 0.5
    });

    // Animation sequence
    tl
      // Animate images from bottom to center positions
      .to(imagesRef.current, {
        y: 0, // Move to their final positions in the center
        scale: 1,
        duration: 1.2,
        stagger: 0.15, // Stagger the animation of each image
        ease: "power2.out"
      })
      // Fade in the logo
      .to(logoRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.8") // Start logo animation before images finish
      // Hold the complete layout for a moment
      .to({}, { duration: 0.8 })
      // Drag the entire screen upwards
      .to(containerRef.current, {
        y: '-100vh',
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          setLoading(false);
        }
      });

    return () => {
      tl.kill();
    };
  }, [setLoading]);

  // Add images to refs array
  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="loader-container inset-0">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Top Left Cake */}
        <div 
          ref={addToRefs}
          className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
          style={{ 
            top: '20%', 
            left: '25%',

          }}
        >
          <img 
            src="/intro/st1.jpg" 
            alt="Cake 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Top Right Cake */}
        <div 
          ref={addToRefs}
          className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
          style={{ 
            top: '20%', 
            right: '25%',
          }}
        >
          <img 
            src="/intro/tm1.jpg" 
            alt="Cake 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Center Logo */}
        <div 
          ref={logoRef}
          className="absolute z-10"
          style={{
            width: '300px',
            height: '150px'
          }}
        >
          <img 
            src="/logo-bw.png" 
            alt="Bake Whisperer Logo"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Bottom Left Cake */}
        <div 
          ref={addToRefs}
          className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
          style={{ 
            bottom: '20%', 
            left: '25%',
          }}
        >
          <img 
            src="/intro/chs1.jpg" 
            alt="Cake 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Bottom Right Cake */}
        <div 
          ref={addToRefs}
          className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
          style={{ 
            bottom: '20%', 
            right: '25%',
          }}
        >
          <img 
            src="/intro/mtch1.jpg" 
            alt="Cake 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default GSAPLoader;