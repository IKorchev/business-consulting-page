import React from "react"

const UpperSection = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='grid grid-cols-2 justify-center py-5 px-24'>
        <div className='text-white self-center w-full ml-16 col-span-1'>
          <h1 className='text-7xl font-bold w-2/3'>
            Perfect Place For Your Business Promotion
          </h1>
          <p className='my-12 text-slate-3 00 text-xl'>
            Our experts will help with anything regarding your business!
          </p>
          <a className='bg-blue-400 px-5 cursor-pointer font-semibold py-2 rounded-full text-xl'>
            Learn more
          </a>
        </div>
        <div className='col-span-1 my-24 h-[35rem] relative'>
          <div className='absolute w-full h-full bg-gradient-to-b from-blue-900/10 to-blue-900 ml-8 mt-8 '></div>
          <div className='absolute w-full h-full bg-blue-100 rounded-xl'></div>
          <div className='absolute w-32 h-20 -left-12 -bottom-10 bg-blue-800 rounded-xl'></div>
        </div>
      </div>
    </section>
  )
}

export default UpperSection
