"use client"

import { TiShoppingCart } from "react-icons/ti";
import { motion } from 'motion/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from "next/image";

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if(window.scrollY >= window.innerHeight){
      setIsScrolling(true)
      // console.log("The other shows up")
    }
    else{
      setIsScrolling(false)
      // console.log("Fixed shows up")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isScrolling ? <NavBarScroll/> : <NavBarFixed/>}
    </>
  )
}

const NavBarFixed = () => {
  const links = [
    {
      id: 2,
      name: "Shop",
      path: "#shop"
    },
    {
      id: 3,
      name: "About",
      path: "#about"
    },
    {
      id: 4,
      name: "Info",
      path: "#info"
    }
  ]
  return (
    <motion.header className="absolute w-full flex z-50 justify-between md:px-12 px-4 py-4">
      <div className="flex justify-center items-center ">
        <motion.img
        layoutId='main-title'
        src="/logo-bw.png"
        className="w-[150px]" 
        transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}}
        />
      </div>
      <nav className='flex md:gap-4 gap-1 col-start-1 col-span-4 md:justify-start lg:pl-6 md:items-center flex-col md:flex-row'>
        {links.map(({id, name, path}) => (
          <a 
          href={path}
          className='md:border-[2px] group underline-none border-softer md:px-2 md:py-1 md:rounded-2xl hover:bg-softer duration-300' key={id}>
            <p className='md:text-lg text-base font-Open font-medium tracking-tighter flex text-softer group-hover:text-[#FFFFFF] duration-300'>{name}</p>
          </a>
        ))}
      </nav>
      <div className="hidden">
          
      </div>
    </motion.header>
  )
}

export const NavBarScroll = () => {
  const[active, setActive] = useState(false);
  const[linkVisible, setLinkVisible] = useState(false);

  const wordVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
      duration: 0.8,
      ease: "easeOut",
    }}
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const links = [
    {
      id: 0,
      name: "Home",
      path: "#home"
    },
    {
      id: 1,
      name: "Shop",
      path: "#shop"
    },
    {
      id: 2,
      name: "About",
      path: "#about"
    },
    {
      id: 3,
      name: "Contact Us",
      path: "#contacts"
    }
  ]
  return (
    <>
      <motion.button
      initial={{scale: 0}}
      animate={{scale: 1}}
      whileHover={{
        scale: 0.8,
        transition: {duration: 0.3}
      }}
      onClick={() => setActive(!active)}
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center right-7 bg-softer top-7 rounded-full size-16  hover:scale-90'>
        <span className={`w-7 h-[2px] bg-white absolute rounded-full ${active ? "translate-y-0 rotate-45 bg-white": "-translate-y-1 rotate-0"} duration-300`}></span>
        <span className={`w-7 h-[2px] bg-white absolute rounded-full ${active ? "translate-y-0 -rotate-45 bg-white": "translate-y-1 rotate-0"} duration-300`}></span>
      </motion.button>
      {active && 
      <motion.div
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end font-Corn'>
          <motion.div 
          initial={{x: active ? 500 : 0}}
          animate={{x: active ? 0: 500, transition: {duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05}}}
          exit={{x: active && 0}}
          className='w-[36em] lg:max-w-3xl flex flex-col justify-end bg-softer text-white'>
            <div></div>
            <motion.nav 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className='relative w-full h-full px-10 leading-tight flex flex-col mt-20'>
              {links.map(links => (
                <motion.li 
                variants={wordVariants}
                key={links.id} className='text-[4rem] text-primary font-semibold group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-primary rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
                  <a href={links.path} onClick={() => setActive(false)} className='group-hover:translate-x-7 duration-700 ease-out'>
                    {links.name}
                  </a>
                </motion.li>
              ))}
            </motion.nav>
            <div className="flex self-center mt-10">
              <Image src="/logo-bw.png" width={200} height={200} alt="logo"/>
            </div>
          </motion.div>
        </div>
      </motion.div>}
    </>
  )
}

export const NavBarScrollRouted = () => {
  const[active, setActive] = useState(false);

  const wordVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {
      duration: 0.8,
      ease: "easeOut",
    }}
  }

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const links = [
    {
      id: 0,
      name: "Home",
      path: "/#home"
    }
  ]
  return (
    <>
      <motion.button
      initial={{scale: 0}}
      animate={{scale: 1}}
      whileHover={{
        scale: 0.8,
        transition: {duration: 0.3}
      }}
      onClick={() => setActive(!active)}
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center right-7 bg-softer top-7 rounded-full size-16  hover:scale-90'>
        <span className={`w-7 h-[2px] bg-white absolute rounded-full ${active ? "translate-y-0 rotate-45 bg-white": "-translate-y-1 rotate-0"} duration-300`}></span>
        <span className={`w-7 h-[2px] bg-white absolute rounded-full ${active ? "translate-y-0 -rotate-45 bg-white": "translate-y-1 rotate-0"} duration-300`}></span>
      </motion.button>
      {active && 
      <motion.div
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end font-Corn'>
          <motion.div 
          initial={{x: active ? 500 : 0}}
          animate={{x: active ? 0: 500, transition: {duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05}}}
          exit={{x: active && 0}}
          className='w-[36em] lg:max-w-3xl flex flex-col justify-end bg-softer text-white'>
            <div></div>
            <motion.nav 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className='relative w-full h-full px-10 leading-tight flex flex-col mt-20'>
              {links.map(links => (
                <motion.li 
                variants={wordVariants}
                key={links.id} className='text-[4rem] text-primary font-semibold group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-primary rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
                  <Link href={links.path} onClick={() => setActive(false)} className='group-hover:translate-x-7 duration-700 ease-out'>
                    {links.name}
                  </Link>
                </motion.li>
              ))}
            </motion.nav>
            <div className="flex self-center mt-10">
              <Image src="/logo-bw.png" width={200} height={200} alt="logo"/>
            </div>
          </motion.div>
        </div>
      </motion.div>}
    </>
  )
}
export default Navbar
