import React from "react"

const Navbar = () => {
  return (
    <header className='px-24 pt-5'>
      <nav className='flex justify-between items-center bg-none text-white px-20'>
        <a className='text-4xl'>Logo</a>
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
