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
      name: "Info & Shop",
      path: "#info"
    }
  ]
  return (
    <motion.header className="absolute w-full flex z-50 justify-between items-center md:px-12 px-2 py-4">
      <div className="flex justify-center items-center ">
        <motion.img
        layoutId='main-title'
        src="/logo-bw.png"
        className="w-[150px]" 
        transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}}
        />
      </div>
      <nav className='flex md:gap-4 gap-1 col-start-1 col-span-4 md:justify-start lg:pl-6 md:items-center flex-col md:flex-row pr-6 flex-wrap'>
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
      name: "Info & Shop",
      path: "#info"
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
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center md:right-7 right-4 bg-softer top-7 rounded-full size-16  hover:scale-90'>
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
            <motion.nav 
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className='relative w-full h-full px-10 leading-tight flex flex-col mt-20 text-walnut'>
              {links.map(links => (
                <motion.li 
                variants={wordVariants}
                key={links.id} className='text-[4rem] font-semibold group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-walnut rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
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

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RxCross2 } from "react-icons/rx";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import CartItem from "./CartItem";
export const NavBarScrollCart = () => {

  const[userId, setUserId] = useState(null)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userUid = localStorage.getItem("userUid");
      setUserId(userUid);
    }
  }, []);
  const[active, setActive] = useState(false);
  const[cart, setCart] = useState([])
  const[totalPrice, setTotal] = useState(0)
  const activeCart = useQuery(api.carts.getCart, {userId})

  useEffect(() => {
    if (activeCart && activeCart.items) {
      const newTotalPrice = activeCart.items.reduce((total, item) => total + item.price, 0);
      setTotal(newTotalPrice);
    }
  }, [activeCart]);

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
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center md:right-7 right-3 bg-beige top-7 rounded-full size-16  hover:scale-90'>
        <HiOutlineShoppingBag size={30} className={`${!active ? "flex" : "hidden"} text-walnut`}/>
        <RxCross2 size={30} className={`${active ? "flex" : "hidden"} text-walnut`}/>
      </motion.button>
      {active &&
      <motion.div
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end font-Corn'>
          <motion.div 
          initial={{x: active ? 500 : 0}}
          animate={{x: active ? 0: 500, transition: {duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05}}}
          exit={{x: active && 0}}
          className='w-[36em] lg:max-w-3xl flex flex-col bg-beige text-white overflow-y-scroll'>
            {activeCart && activeCart.items.length > 0 ? (
              <div 
              className='relative h-full px-10 leading-tight flex flex-col mt-12 gap-8'>
                <div className="flex flex-col gap-2">
                  <h4 className="font-Corn text-[2rem] text-walnut font-semibold tracking-tighter">Cart</h4>
                  {activeCart.items.map((item, id) => (
                    <CartItem key={id} item={item}/>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-full px-10 leading-tight flex flex-col mt-12 gap-12">
                <h4 className="font-Corn text-[2rem] text-walnut font-semibold tracking-tighter">Cart</h4>
                <h5 className="font-Corn text-[1.5rem] text-walnut font-medium tracking-tighter">Cart is Empty</h5>
              </div>
            )}
            {activeCart && activeCart.items.length > 0 && (
              <div className="px-10 pb-5 mt-8">
                <Link href={"/pages/confirm-order"} className="flex items-center font-Open gap-4 text-walnut text-[1.5rem] rounded-xl border-[1px] px-2 py-1 border-walnut hover:text-beige hover:bg-walnut">
                  <p className="flex items-center">${totalPrice}</p> | <p className="flex items-center">Checkout</p>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>}
    </>
  )
}
export default Navbar
