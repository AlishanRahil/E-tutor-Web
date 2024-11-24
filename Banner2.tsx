import React from 'react'
import Image from 'next/image'
import img1 from '../Assets/banner1-ChWN6Q7z.png'
import img2 from '../Assets/banner2-BMWB7nzP.png'
const Banner2 = () => {
  return (
    <div className=' py-12'>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-y-8 space-y-6  ">
         <div className=' flex justify-start items-center md:order-1 order-2'>
            <Image src={img2} alt='banner' className='w-[400px] h-full object-cover mx-auto' />
         </div>
         <div className=' flex  flex-col items-center md:items-start justify-start text-left space-y-3 lg:max-w-[500px]'>
         <p className=' text-start text-orange-500 font-bold text-lg'>Customize Your Scheduled</p>
            <h1 className=' text-2xl md:text-2xl font-bold  text-center md:text-start'>
            Talented and Qualified Tutors to Serve You for Help
            </h1>
            <p className=' text-xs md:text-lg font-bold text-center md:text-start'>
              Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.
            </p>
            <div className=''>
              <button className=' mt-5 md:mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                Get Started
              </button>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2

