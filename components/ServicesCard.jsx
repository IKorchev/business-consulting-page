import React from "react"
import Icon1 from "../assets/ihop-restaurant-logo.svg"
import Icon2 from "../assets/emci-1.svg"
import Icon3 from "../assets/honeygrow.svg"
import Icon4 from "../assets/ruby-tuesday-1.svg"
import Icon5 from "../assets/dodge-12.svg"
import Image from "next/image"

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5]
const ServicesCard = ({ text, image, title }) => {
  return (
    <div className='flex even:flex-row-reverse my-16 shadow-lg shadow-blue-900/10 mx-16 border'>
      <div className='w-full'>
        <div className='h-full relative rounded-lg '>
          <Image src={image} layout='fill' objectFit='cover' />
        </div>
      </div>
      <div className='w-full self-center'>
        <div className='p-12'>
          <h1 className='text-3xl font-semibold'>{title}</h1>
          <p className='mt-5'>{text}</p>
          <p className='font-semibold text-lg text-blue-900 underline mt-5'>As used in</p>
          <div className='flex mt-5 space-x-5  items-center justify-center'>
            {icons.map((el) => {
              return (
                <div className='h-12 w-24 relative'>
                  <Image src={el} layout='fill' />
                </div>
              )
            })}

            <div className=' h-12 w-24 mx-2 flex items-center text-2xl'>+50</div>
          </div>
          <button className='mt-12 border-2 px-5 py-2 rounded-full border-pink-500 text-xl shadow-lg shadow-pink-500/20 font-semibold'>
            Read more
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
