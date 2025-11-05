// // "use client"

// // import React, { useEffect } from 'react'
// // import { m, motion } from "motion/react"
// // import Image from 'next/image'
// // // import Image from 'next/image'

// // const Loader = ({setLoading}) => {

// //     const strawberry = {
// //       id: 1,
// //       img: "/intro/st1.jpg",
// //     }

// //     const tiramisu = {
// //       id: 2,
// //       img: "/intro/tm1.jpg",
// //     }

// //     const cheese = {
// //       id: 3,
// //       img: "/intro/chs1.jpg",
// //     }

// //     const brown = {
// //       id: 4,
// //       img: "/intro/bwn1.jpg",
// //     }

// //     const container = {
// //         show: {
// //           transition: {
// //             staggerChildren: 0.2,
// //           },
// //         },
// //       };
      
// //       const item = {
// //         hidden: { opacity: 0, y: 200 },
// //         show: {
// //           opacity: 1,
// //           y: 0,
// //           transition: {
// //             ease: "easeInOut",
// //             duration: 0.8,
// //           },
// //         },
// //         exit: {
// //           opacity: 0,
// //           y: -200,
// //           transition: {
// //             ease: "easeInOut",
// //             duration: 0.5,
// //           },
// //         },
// //       };

// //       const itemMain = {
// //         hidden: { opacity: 0, y: 200 },
// //         show: {
// //           opacity: 1,
// //           y: 0,
// //           transition: {
// //             ease: [0.25, 0.1, 0.25, 1],
// //             duration: 0.6,
// //           },
// //         },
// //       };

// //   return (
// //     <motion.div className='w-full h-screen inset-0 flex justify-center items-center relative'>
// //       <motion.div 
// //       variants={container}
// //       initial="hidden"
// //       animate="show"
// //       exit="exit"
// //       onAnimationComplete={() => setLoading(false)}
// //       className='w-full flex justify-center items-center'>
// //         <ImageBlock1 variants={item} details={strawberry}/>
// //         <ImageBlock4 variants={item} details={brown}/>
// //         <motion.div
// //         className='absolute'
// //         variants={itemMain}
// //         >
// //           {/* <motion.h1 layoutId="main-title" className='font-EB md:text-[3rem] text-[2rem] font-medium tracking-tighter text-walnut'>Bake Whisperer</motion.h1> */}
          
// //           <motion.img className="md:w-[400px] w-[200px]" layoutId="main-title" src="/logo-bw.png"/>
// //         </motion.div>
// //         <ImageBlock2 variants={item} details={tiramisu}/>
// //         <ImageBlock3 variants={item} details={cheese}/>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // export const ImageBlock1 = ({variants, details}) => {
// //     return (
// //       <motion.div
// //       variants={variants}
// //       className='absolute'
// //       >
// //         <Image
// //           width={200}
// //           height={10}
// //           className={`md:w-[200px] w-[100px] rounded-xl md:-translate-x-64 md:-translate-y-24 -translate-x-24 -translate-y-20`}
// //           src={details.img}
// //           alt={details.id}
// //         />
// //       </motion.div>
// //     )
// // }

// // export const ImageBlock2 = ({variants, details}) => {
// //   return (
// //     <motion.div
// //     variants={variants}
// //     className='absolute'
// //     >
// //       <Image
// //         className={`md:w-[150px] w-[90px] rounded-xl md:translate-x-64 md:-translate-y-36 translate-x-24 -translate-y-28`}
// //         width={200}
// //         height={10}
// //         src={details.img}
// //         alt={details.id}
// //       />
// //     </motion.div>
// //   )
// // }

// // export const ImageBlock3 = ({variants, details}) => {
// //   return (
// //     <motion.div
// //     variants={variants}
// //     className='absolute'
// //     >
// //       <Image
// //         width={100}
// //         height={10}
// //         className={`md:w-[150px] w-[100px] rounded-xl md:translate-x-52 md:translate-y-52 translate-x-20 translate-y-24`}
// //         src={details.img}
// //         alt={details.id}
// //       />
// //     </motion.div>
// //   )
// // }

// // export const ImageBlock4 = ({variants, details}) => {
// //   return (
// //     <motion.div
// //     variants={variants}
// //     className='absolute'
// //     >
// //       <Image
// //         width={100}
// //         height={10}
// //         className={`md:w-[150px] w-[90px] rounded-xl md:-translate-x-72 md:translate-y-52 -translate-x-28 translate-y-32`}
// //         src={details.img}
// //         alt={details.id}
// //       />
// //     </motion.div>
// //   )
// // }
// // export default Loader

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const GSAPLoader = ({ setLoading }) => {
//   const containerRef = useRef(null);
//   const imagesRef = useRef([]);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();
    
//     // Set container to full screen initially
//     gsap.set(containerRef.current, {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       zIndex: 9999,
//       backgroundColor: '#DDD1C5', // Light background like your site
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     });

//     // Set initial positions - images start from bottom of screen
//     gsap.set(imagesRef.current, { 
//       y: window.innerHeight, // Start from bottom of viewport
//       opacity: 1,
//       scale: 0.8
//     });

//     // Set logo initial state
//     gsap.set(logoRef.current, {
//       opacity: 0,
//       scale: 0.5
//     });

//     // Animation sequence
//     tl
//       // Animate images from bottom to center positions
//       .to(imagesRef.current, {
//         y: 0, // Move to their final positions in the center
//         scale: 1,
//         duration: 1.2,
//         stagger: 0.15, // Stagger the animation of each image
//         ease: "power2.out"
//       })
//       // Fade in the logo
//       .to(logoRef.current, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)"
//       }, "-=0.8") // Start logo animation before images finish
//       // Hold the complete layout for a moment
//       .to({}, { duration: 0.8 })
//       // Drag the entire screen upwards
//       .to(containerRef.current, {
//         y: '-100vh',
//         duration: 1.2,
//         ease: "power2.inOut",
//         onComplete: () => {
//           setLoading(false);
//         }
//       });

//     return () => {
//       tl.kill();
//     };
//   }, [setLoading]);

//   // Add images to refs array
//   const addToRefs = (el) => {
//     if (el && !imagesRef.current.includes(el)) {
//       imagesRef.current.push(el);
//     }
//   };

//   return (
//     <div ref={containerRef} className="loader-container inset-0">
//       <div className="relative w-full h-full flex items-center justify-center">
        
//         {/* Top Left Cake */}
//         <div 
//           ref={addToRefs}
//           className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
//           style={{ 
//             top: '20%', 
//             left: '25%',

//           }}
//         >
//           <img 
//             src="/intro/st1.jpg" 
//             alt="Cake 1"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>
        
//         {/* Top Right Cake */}
//         <div 
//           ref={addToRefs}
//           className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
//           style={{ 
//             top: '20%', 
//             right: '25%',
//           }}
//         >
//           <img 
//             src="/intro/tm1.jpg" 
//             alt="Cake 2"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Center Logo */}
//         <div 
//           ref={logoRef}
//           className="absolute z-10"
//           style={{
//             width: '300px',
//             height: '150px'
//           }}
//         >
//           <img 
//             src="/logo-bw.png" 
//             alt="Bake Whisperer Logo"
//             className="w-full h-full object-contain"
//           />
//         </div>
        
//         {/* Bottom Left Cake */}
//         <div 
//           ref={addToRefs}
//           className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
//           style={{ 
//             bottom: '20%', 
//             left: '25%',
//           }}
//         >
//           <img 
//             src="/intro/chs1.jpg" 
//             alt="Cake 3"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>
        
//         {/* Bottom Right Cake */}
//         <div 
//           ref={addToRefs}
//           className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px]"
//           style={{ 
//             bottom: '20%', 
//             right: '25%',
//           }}
//         >
//           <img 
//             src="/intro/mtch-1.jpg" 
//             alt="Cake 4"
//             className="w-full h-full object-cover rounded-lg shadow-lg"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GSAPLoader;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BakeryLoader = ({ setLoading }) => {
  const containerRef = useRef(null);
  const whiskRef = useRef(null);
  const bowlRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Set container
    gsap.set(containerRef.current, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      backgroundColor: '#DDD1C5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    });

    // Initial states
    gsap.set(bowlRef.current, {
      scale: 0,
      opacity: 0
    });

    gsap.set(whiskRef.current, {
      y: -100,
      opacity: 0,
      rotation: -45
    });

    gsap.set(textRef.current, {
      opacity: 0,
      y: 30
    });

    gsap.set(dotsRef.current, {
      opacity: 0
    });

    // Animation sequence
    tl
      // Bowl appears
      .to(bowlRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)"
      })
      // Whisk drops in and starts mixing
      .to(whiskRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "bounce.out"
      })
      // Mixing animation
      .to(whiskRef.current, {
        rotation: 45,
        duration: 0.4,
        repeat: 3,
        yoyo: true,
        ease: "power1.inOut"
      })
      // Text fades in
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, "-=0.8")
      // Loading dots animation
      .to(dotsRef.current, {
        opacity: 1,
        stagger: 0.2,
        repeat: 2,
        yoyo: true,
        duration: 0.3
      }, "-=0.3")
      // Hold
      .to({}, { duration: 0.5 })
      // Exit animation
      .to(containerRef.current, {
        y: '-100vh',
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setLoading(false);
        }
      });

    return () => {
      tl.kill();
    };
  }, [setLoading]);

  const addToDots = (el) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="loader-container">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Bowl */}
        <div ref={bowlRef} className="relative">
          <svg width="200" height="120" viewBox="0 0 200 120" className="mb-4">
            {/* Bowl shadow */}
            <ellipse cx="100" cy="115" rx="80" ry="8" fill="#773F1A" opacity="0.1"/>
            
            {/* Bowl body */}
            <path
              d="M 30 40 Q 30 100 100 110 Q 170 100 170 40 L 165 45 Q 165 95 100 105 Q 35 95 35 45 Z"
              fill="none"
              stroke="#773F1A"
              strokeWidth="0.8"
            />
            
            {/* Bowl rim */}
            <ellipse cx="100" cy="40" rx="70" ry="10" fill="none" stroke="#773F1A" strokeWidth="0.8"/>
            <ellipse cx="100" cy="40" rx="65" ry="8" fill="none" stroke="#773F1A" strokeWidth="0.8"/>
            
            {/* Mixing content */}
            <ellipse cx="100" cy="42" rx="55" ry="6" fill="none" stroke="#773F1A" strokeWidth="0.6" opacity="0.5"/>
            <ellipse cx="100" cy="42" rx="50" ry="5" fill="none" stroke="#773F1A" strokeWidth="0.6" opacity="0.5"/>
          </svg>
        </div>

        {/* Whisk */}
        <div ref={whiskRef} className="absolute" style={{ top: '20px' }}>
          <svg width="80" height="100" viewBox="0 0 80 100">
            {/* Handle */}
            <rect x="38" y="0" width="4" height="50" fill="none" stroke="#773F1A" strokeWidth="0.8" rx="2"/>
            
            {/* Balloon whisk wires - starts narrow, widens, then smoothly curves to point */}
            {/* Left outer wire - smooth teardrop curve */}
            <path d="M 40 50 Q 30 58 26 70 Q 24 78 24 85 Q 26 91 32 95 Q 36 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Left middle wire */}
            <path d="M 40 50 Q 34 58 32 70 Q 31 78 31 85 Q 32 91 35 95 Q 37 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Left inner wire */}
            <path d="M 40 50 Q 37 58 36 70 Q 35 78 35 85 Q 36 91 37 95 Q 38 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Center wire */}
            <path d="M 40 50 L 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Right inner wire */}
            <path d="M 40 50 Q 43 58 44 70 Q 45 78 45 85 Q 44 91 43 95 Q 42 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Right middle wire */}
            <path d="M 40 50 Q 46 58 48 70 Q 49 78 49 85 Q 48 91 45 95 Q 43 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            {/* Right outer wire - smooth teardrop curve */}
            <path d="M 40 50 Q 50 58 54 70 Q 56 78 56 85 Q 54 91 48 95 Q 44 97 40 97" stroke="#773F1A" strokeWidth="0.6" fill="none" opacity="0.7"/>
            
            {/* Bottom point where all wires meet */}
            <circle cx="40" cy="97" r="1.5" fill="#773F1A" opacity="0.7"/>
          </svg>
        </div>

        {/* Text */}
        <div ref={textRef} className="mt-8 text-center">
          <h2 className="text-3xl font-Open text-walnut font-semibold tracking-wide mb-2">
            Baking Something Special
          </h2>
          <div className="flex items-center justify-center gap-1">
            <span ref={addToDots} className="w-2 h-2 bg-walnut rounded-full"></span>
            <span ref={addToDots} className="w-2 h-2 bg-walnut rounded-full"></span>
            <span ref={addToDots} className="w-2 h-2 bg-walnut rounded-full"></span>
          </div>
        </div>

        {/* Decorative elements */}
        {/* <div className="absolute top-10 left-10">
          <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-20">
            <circle cx="15" cy="15" r="3" fill="#773F1A"/>
            <circle cx="15" cy="15" r="8" fill="none" stroke="#773F1A" strokeWidth="1"/>
            <circle cx="15" cy="15" r="12" fill="none" stroke="#773F1A" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10">
          <svg width="30" height="30" viewBox="0 0 30 30" className="opacity-20">
            <circle cx="15" cy="15" r="3" fill="#773F1A"/>
            <circle cx="15" cy="15" r="8" fill="none" stroke="#773F1A" strokeWidth="1"/>
            <circle cx="15" cy="15" r="12" fill="none" stroke="#773F1A" strokeWidth="0.5"/>
          </svg>
        </div> */}

      </div>
    </div>
  );
};

export default BakeryLoader;