import React from "react"

const ServicesCard = () => {
  return (
    <div className='flex even:flex-row-reverse justify-evenly my-32'>
      <div className='w-full'>
        <div className='w-3/4 h-96  rounded-lg bg-gray-900'></div>
      </div>
      <div className='w-full self-center'>
        <div className="w-3/4">
          <h1 className='text-3xl font-semibold'>FSA Applications</h1>
          <p className='mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorem, esse
            tempora sit quia incidunt temporibus corporis quas dicta, aliquam antium
            soluta quaerat, quos quis temporibus possimus velit ipsa!
          </p>
          <p className='font-semibold text-lg text-blue-900 underline mt-5'>As used in</p>
          <div className='flex mt-5'>
            <div className='bg-blue-900 h-12 w-24 mr-2'></div>
            <div className='bg-blue-900 h-12 w-24 mx-2'></div>
            <div className='bg-blue-900 h-12 w-24 mx-2'></div>
            <div className='bg-blue-900 h-12 w-24 mx-2'></div>
            <div className=' h-12 w-24 mx-2 flex items-center text-2xl'>+150</div>
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
