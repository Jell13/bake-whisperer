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
      name: "About Us"
    },
    {
      id: 3,
      name: "Contact Us"
    }
  ]
  return (
    <header className='absolute grid grid-cols-12 w-full px-2 py-4'>
      <nav className='flex gap-8 col-start-1 col-span-4 justify-center items-center'>
        {links.map(({id, name}) => (
          <Link className='flex' href="/" key={id}>
            <p className='text-xl font-Open'>{name}</p>
          </Link>
        ))}
      </nav>
      <div className='col-start-5 col-span-4'>
        <Logo/>
      </div>
    </header>
  )
}

export default Navbar
