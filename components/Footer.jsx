import React from "react"
import Logo from "../assets/Logo.svg"
import Image from "next/image"
import { FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa"
const links = [
  { icon: <FaTiktok />, to: "https://tiktok.com/" },
  { icon: <FaInstagram />, to: "https://instagram.com/" },
  { icon: <FaFacebook />, to: "https://facebook.com/" },
  { icon: <FaLinkedin />, to: "https://linkedin.com/" },
]
const Footer = () => {
  return (
    <footer className='mt-48 bg-blue-900 flex flex-col items-center'>
      <div className='register-wrapper h-48 w-full max-w-[65rem] shadow-lg shadow-blue-300/30 rounded-2xl px-12 -mt-24 grid grid-cols-2 gap-10 place-items-center'>
        <h1 className='text-white font-black text-4xl col-span-1 px-7 leading-tight '>
          Register for our mailing list if You'd like to{" "}
          <span className='text-pink-300'> know more</span>
        </h1>
        <form className='h-12 w-full col-span-1 flex border-2 overflow-hidden rounded-full border-pink-600 bg-white'>
          <input
            type='email'
            className='h-full w-full px-5 text-lg'
            placeholder='Enter your email'
          />
          <input
            type='submit'
            disabled
            value='REGISTER'
            className='bg-pink-600 rounded-full text-white text-xl px-5'
          />
        </form>
      </div>
      <div className='flex container px-24 justify-between mt-12'>
        <div className='text-white flex flex-col'>
          <div className='relative h-16 -mt-3 w-32 flex items-start'>
            <Image src={Logo} className='' layout='fill' />
          </div>
          <a href='' className='text-lg font-semibold mt-12'>
            <span className='mr-3'>&#9993;</span> example@mail.com
          </a>
          <a href='' className='text-lg font-semibold'>
            <span className='mr-1'>📞</span> +52919220019
          </a>
        </div>
        <div className='text-white flex flex-col'>
          <h2 className='text-3xl font-black'>About</h2>
          <a href='' className='text-lg font-semibold mt-5'>
            Company
          </a>
          <a href='' className='text-lg font-semibold'>
            Team
          </a>
          <a href='' className='text-lg font-semibold'>
            Career
          </a>
          <a href='' className='text-lg font-semibold'>
            Blogs
          </a>
          <a href='' className='text-lg font-semibold'>
            Pricing
          </a>
        </div>
        <div className='text-white flex flex-col'>
          <h2 className='text-3xl font-black'>Address</h2>
          <a href='' className='text-lg font-semibold mt-5'>
            Country Delivery
          </a>
          <a href='' className='text-lg font-semibold'>
            Counter Beach Post
          </a>
          <a href='' className='text-lg font-semibold'>
            www.bsnscnslt.io
          </a>
        </div>
        <div className='text-white flex flex-col'>
          <h2 className='text-3xl font-black'>Socials</h2>
          <div className='flex space-x-5 mt-5'>
            {links.map((el) => (
              <a className='text-2xl' target='_blank' rel='noreferrer' href={el.to}>
                {el.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
