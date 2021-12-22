import React from "react"
import ServicesCard from "./ServicesCard"
const ServicesSection = () => {
  const images = [1, 2, 3]
  const icons = [1, 2, 3, 4]
  return (
    <section className='container mx-auto py-12'>
      <header className='w-1/2 mx-auto my-32'>
        <h1 className='text-center mt-24'>Services we provide</h1>
        <p className='mt-5 text-center  '>
          We solve businesses' toughest challenges across all industries. We're fearless,
          passionate and unafraid to go against the grain. If you have an entrepreneurial
          mindset, can deliver at pace and are looking to challenge the status quo, then
          you'll fit right in here.
        </p>
      </header>
      <div className='mx-auto'>
        {images.map((el) => (
          <ServicesCard />
        ))}
      </div>
      <div className='mx-auto flex justify-center'>
        <button className=' bg-blue-500 text-3xl px-8 py-3 rounded-full text-white uppercase'>
          See all
        </button>
      </div>
      <div className='bg-slate-800 h-[28rem] mt-36 px-24 flex justify-around items-center'>
        <div className='bg-gradient-to-r rounded-xl from-blue-700 to-blue-900 h-64 w-72'></div>
        <div className='bg-gradient-to-r rounded-xl from-blue-700 to-blue-900 h-64 w-72'></div>
        <div className='bg-gradient-to-r rounded-xl from-blue-700 to-blue-900 h-64 w-72'></div>
        <div className='bg-gradient-to-r rounded-xl from-blue-700 to-blue-900 h-64 w-72'></div>
      </div>
    </section>
  )
}

export default ServicesSection
