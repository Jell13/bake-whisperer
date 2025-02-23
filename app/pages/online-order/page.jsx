import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col'>
      <nav className='flex items-center'>
        <Link href={"/"}>
          <img src="/logo-bw.png" alt="" className='w-[250px]'/>
        </Link>
        <p className='font-Corn text-[4rem] font-semibold text-walnut'>Online Ordering</p>
      </nav>
      <div>

      </div>
    </section>
  )
}

export default page
