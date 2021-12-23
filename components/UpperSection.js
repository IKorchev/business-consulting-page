import React from "react"
import Image from "next/image"
import IMG1 from "../assets/Image_1.jpg"
import ChartPieIcon from "@heroicons/react/solid/ChartPieIcon"
import Icon1 from "../assets/shopify-logo-2018.svg"
import Icon2 from "../assets/netlink.svg"
import Icon3 from "../assets/ibm-business-partner.svg"
import Icon4 from "../assets/eu-business-school-01.svg"
const icons = [Icon1, Icon2, Icon3, Icon4]
const UpperSection = () => {
  return (
    <section className='flex flex-col items-center justify-center container mx-auto '>
      <div className='grid grid-cols-2 justify-center'>
        <div className='text-white self-center w-full ml-16 col-span-1'>
          <h1 className='text-7xl font-bold w-2/3'>
            Perfect Place For Your <span className='text-pink-500'>Business</span>{" "}
            Promotion
          </h1>
          <p className='my-12 text-slate-3 00 text-xl'>
            Our experts will help with anything regarding your business!
          </p>
          <a className='bg-blue-400 px-5 cursor-pointer font-semibold py-2 rounded-full shadow-lg shadow-blue-300/20 text-xl'>
            Learn more
          </a>
        </div>
        <div className='col-span-1 my-24 h-[35rem] relative'>
          <div className='absolute w-full h-full bg-gradient-to-b from-blue-900/10 to-blue-900 ml-8 mt-8 '></div>
          <div className='absolute w-full h-full rounded-xl overflow-hidden'>
            <Image src={IMG1} layout='fill' />
          </div>
          <div className='absolute w-32 h-20 -left-12 -bottom-10 bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl grid place-items-center'>
            <ChartPieIcon color='#ff55ff' className='h-16 w-16' />
          </div>
        </div>
      </div>
      <div className='bg-white w-2/3 h-32 -mb-16 shadow-2xl shadow-blue-200 rounded-lg mx-auto  flex justify-evenly items-center'>
        {icons.map((el) => {
          return (
            <div className='h-32 w-32 relative'>
              <Image src={el} layout='fill' />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UpperSection
