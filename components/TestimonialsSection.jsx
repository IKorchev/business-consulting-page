import { useRef } from "react"
import TestimonialCard from "./TestimonialCard"

const TestimonialsSection = () => {
  const testimonials = [1, 2]
  const customerLogo = useRef(null)

  return (
    <section className='bg-blue-50 h-screen mt-24 py-24'>
      <div className='flex flex-col container mx-auto'>
        <header className='w-1/2 mx-auto'>
          <h1 className='text-center'>What our clients say</h1>
          <p className='text-lg text-center mt-6'>
            Everything we do at Clarasys is focused on creating engaging, smart-working
            and connected experiences. Through these, we increase efficiency and
            dependability, loyalty and reward. Get ready for a consultancy unlike any
            other.
          </p>
        </header>
        <div className=' px-12 mt-24 flex gap-5'>
          {testimonials.map((el) => (
            <TestimonialCard />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
