import React from "react"

const AgentsSection = () => {
  return (
    <section className='container mx-auto'>
      <div className='mt-24 flex justify-between'>
        <div className='w-1/2'>
          <h1>Meet our agents</h1>
          <p className='text-lg mt-8'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates beatae
            facere at sed repellat! Excepturi quod debitis officiis deserunt obcaecati.
          </p>
        </div>
        <div>
          <button className='px-5 py-2 text-lg font font-semibold border-2 rounded-full border-black'>
            See all <span className='ml-5'>&rarr;</span>
          </button>
        </div>
      </div>
      <div className='flex mt-24 justify-between'>
        <div className='card h-[35rem] w-[28rem] bg-slate-100 shadow-lg rounded-lg overflow-hidden'>
          <div className='w-full h-96 bg-slate-300'></div>
          <div className='p-3'>
            <h2 className='text-3xl font-semibold'>First Last</h2>
            <div className='flex justify-start space-x-3 mt-5'>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='card h-[35rem] w-[28rem] bg-slate-100 shadow-lg rounded-lg overflow-hidden'>
          <div className='w-full h-96 bg-slate-300'></div>
          <div className='p-3'>
            <h2 className='text-3xl font-semibold'>First Last</h2>
            <div className='flex justify-start space-x-3 mt-5'>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='card h-[35rem] w-[28rem] bg-slate-100 shadow-lg rounded-lg overflow-hidden'>
          <div className='w-full h-96 bg-slate-300'></div>
          <div className='p-3'>
            <h2 className='text-3xl font-semibold'>First Last</h2>
            <div className='flex justify-start space-x-3 mt-5'>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
              <div className='bg-white h-10 w-10 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AgentsSection
