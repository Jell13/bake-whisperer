import { TiShoppingCart } from "react-icons/ti";
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const links = [
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
      name: "Info",
      path: "#info"
    }
  ]
  return (
    // <motion.header className='absolute z-50 grid grid-cols-12 w-full px-2 py-4'>
    //   <nav className='md:flex gap-4 col-start-1 col-span-4 justify-start lg:pl-6 items-center hidden'>
    //     {links.map(({id, name, path}) => (
    //       <a 
    //       href={path}
    //       className='border-[2px] group underline-none border-secondary lg:px-2 lg:py-1 px-2 py-2 rounded-2xl hover:bg-secondary duration-300' key={id}>
    //         <p className='text-lg font-Open font-medium tracking-tighter flex text-secondary group-hover:text-[#FFFFFF] duration-300'>{name}</p>
    //       </a>
    //     ))}
    //   </nav>
    //   <div className='col-start-5 col-span-4'>
    //     <div className="flex justify-center items-center">
    //       <motion.h1 
    //       layoutId='main-title' 
    //       transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}}
    //       className='font-EB text-[3rem] font-bold tracking-tighter text-walnut'>
    //         Bake Whisperer
    //       </motion.h1>
    //     </div>
    //   </div>
    //   <div className='col-start-12 flex justify-center items-center'>
    //     <Link href="/" className="hover:border-2 hover:border-secondary rounded-full duration-300 p-2">
    //       <TiShoppingCart className="text-secondary" size={30}/>
    //     </Link>
    //   </div>
    // </motion.header>
    <motion.header className="absolute w-full flex z-50 justify-between md:px-12 px-4 py-4">
      <div className="flex justify-center items-center ">
        <motion.h1 
        layoutId='main-title' 
        transition={{ease: [0.6, 0.01, -0.05, 0.9], duration: 1.3}}
        className='font-EB md:text-[3rem] text-[2rem] font-bold tracking-tighter text-walnut'>
          Bake Whisperer
        </motion.h1>
      </div>
      <nav className='flex md:gap-4 col-start-1 col-span-4 md:justify-start lg:pl-6 md:items-center flex-col md:flex-row'>
        {links.map(({id, name, path}) => (
          <a 
          href={path}
          className='md:border-[2px] group underline-none border-secondary md:px-2 md:py-1 md:rounded-2xl hover:bg-secondary duration-300' key={id}>
            <p className='md:text-lg text-base font-Open font-medium tracking-tighter flex text-secondary group-hover:text-[#FFFFFF] duration-300'>{name}</p>
          </a>
        ))}
      </nav>
      <div className="hidden">
          
      </div>
    </motion.header>
  )
}

const NavbarScroll = () => {
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
      className='text-black text-xl z-40 fixed flex flex-col justify-center items-center right-7 top-7 rounded-full size-16 bg-primary hover:scale-90'>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 rotate-45": "-translate-y-1 rotate-0"} duration-300`}></span>
        <span className={`w-7 h-[2px] bg-secondary absolute rounded-full ${active ? "translate-y-0 -rotate-45": "translate-y-1 rotate-0"} duration-300`}></span>
      </motion.button>
      {active && 
      <motion.div
      className='w-full h-screen fixed top-0 left-0 z-30 justify-end duration-300'>
        <div className='w-full h-screen flex justify-end'>
          <motion.div 
          initial={{x: active ? 500 : 0}}
          animate={{x: active ? 0: 500, transition: {duration: 0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05}}}
          exit={{x: active && 0}}
          className='w-[36em] lg:max-w-3xl flex flex-col justify-end bg-fourth'>
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
                key={links.id} className='text-[4rem] text-primary font-medium group relative flex w-fit gap-4 cursor-pointer items-center'>
                  <span className='w-3 h-3 absolute invisible opacity-0 bg-primary rounded-full group-hover:visible group-hover:opacity-100 group-hover:scale-100 scale-0 duration-300'></span>
                  <a href={links.link} onClick={() => setActive(false)} className='group-hover:translate-x-7 duration-700 ease-out'>
                    {links.name}
                  </a>
                </motion.li>
              ))}
            </motion.nav>
          </motion.div>
        </div>
      </motion.div>}
    </>
  )
}

export default Navbar
