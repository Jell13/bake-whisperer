import { TiShoppingCart } from "react-icons/ti";
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Navbar = () => {

  const links = [
    {
      id: 1,
      name: "Shop"
    },
    {
      id: 2,
      name: "About"
    },
    {
      id: 3,
      name: "Contact Us"
    }
  ]
  return (
    <header className='absolute grid grid-cols-12 w-full px-2 py-4'>
      <nav className='flex gap-4 col-start-1 col-span-4 justify-start lg:pl-6 items-center'>
        {links.map(({id, name}) => (
          <Link className='border-2 border-secondary lg:px-2 lg:py-2 px-2 py-2 rounded-2xl hover:bg-secondary duration-300' href="/" key={id}>
            <p className='text-lg font-Open font-semibold tracking-tighter flex text-secondary hover:text-[#FFFFFF] duration-300'>{name}</p>
          </Link>
        ))}
      </nav>
      <div className='col-start-5 col-span-4'>
        <Logo/>
      </div>
      <div className='col-start-12 flex justify-center items-center'>
        <Link href="/" className="hover:border-2 hover:border-secondary rounded-full duration-300 p-3">
          <TiShoppingCart className="text-secondary" size={40}/>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
