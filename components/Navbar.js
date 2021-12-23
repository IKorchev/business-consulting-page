import React from "react"
import Logo from "../assets/Logo.svg"
import Image from "next/image"
const Navbar = () => {
  return (
    <header className='container mx-auto'>
      <nav className='flex justify-between items-center bg-none text-white px-20'>
        <a className='text-4xl relative h-24 w-48 cursor-pointer'>
          <Image src={Logo} layout='fill' />
        </a>
        <div className='text-stone-300 text-xl'>
          <a className='mx-2  cursor-pointer text-white'>Home</a>
          <a className='mx-2 cursor-pointer'>Services &#8681;</a>
          <a className='mx-2 cursor-pointer'>Our team</a>
          <a className='mx-2 cursor-pointer'>Blog</a>
          <a className='mx-2 cursor-pointer'>E-learning</a>
        </div>
        <button className='py-2 px-5 bg-blue-500 rounded-full'>Contact us</button>
      </nav>
    </header>
  )
}

export default Navbar
