const TestimonialCard = () => {
  return (
    <div className='bg-white h-96 p-8 flex-1 rounded-xl'>
      <div className='flex space-x-12'>
        <div className='bg-black rounded-lg h-24 w-24'></div>
        <div className='flex flex-col justify-around items-between py-3'>
          <h2 className='text-3xl font-bold'>Some Name</h2>
          <p className='text-lg text-gray-400'>Software Engineer</p>
        </div>
      </div>
      <p className='text-lg mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maiores? Repellat,
        sit laudantium. Minus minima vel numquam sit saepe fugit eum, cum non reiciendis
        odio modi rerum odit nulla expedita aspernatur sint nam. Doloremque quidem
        doloribus quo quibusdam cum vel.
      </p>
      <div className='flex justify-between mt-8'>
        <div className='flex space-x-3'>
          <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
          <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
          <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
          <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
          <div className='h-5 w-5 bg-yellow-400 rounded-full'></div>
        </div>
        <p>Wednesday, 20 January</p>
      </div>
    </div>
  )
}

export default TestimonialCard
