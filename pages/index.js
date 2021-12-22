import Head from "next/head"
import Navbar from "../components/Navbar"
import UpperSection from "../components/UpperSection"

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Landing (upper) section */}
      <div className='bg-gradient-to-r from-[#090a4c] to-[#052b67] pb-5 font-mukta'>
        <Navbar />
        <UpperSection />
      </div>

      {/* INTERSECTION */}
      <div className='bg-white w-2/3 h-32 -mt-16 shadow-2xl shadow-blue-200 rounded-lg mx-auto  flex justify-evenly items-center'>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
      </div>
      {/* Lower sections */}
      
    </div>
  )
}

export default Home
