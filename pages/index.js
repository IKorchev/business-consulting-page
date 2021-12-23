import Head from "next/head"
import Navbar from "../components/Navbar"
import UpperSection from "../components/UpperSection"
import ServicesSection from "../components/ServicesSection"
import AgentsSection from "../components/AgentsSection"
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Landing (upper) section */}
      <div className='bg-gradient-to-r from-gray-50 to-gray-100 pb-5 font-mukta'>
        <div className='bg-gradient-to-r from-[#090a4c] to-[#052b67]'>
          <Navbar />
          <UpperSection />
        </div>
        <ServicesSection />
        <AgentsSection />
        <TestimonialsSection />
        <Footer />
      </div>

      {/* INTERSECTION */}

      {/* Lower sections */}
    </div>
  )
}

export default Home
