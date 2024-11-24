import React from 'react'
import bussines from '../newimages/bussiness-man.png'
import newimg from '../newimages/tag.png'
import price from '../newimages/interactive.png'
import Image from 'next/image'
import avialble from '../newimages/available.png'
const Why = () => {
  return (
    <div className=' bg-gray-100 '>
       <div className="container mx-auto py-24">

        <div className=' space-y-6 p-6  text-center max-w-[500px] mx-auto mb-5'>
            <h1 className=' uppercase  font-bold text-blue-500'>Why You Choose Us</h1>
            <p className=' font-bold text-3xl'>Benefits of online tutoring services with us</p>
        </div>

        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
            <div className=' flex flex-wrap shadow-md bg-white p-5 rounded-md'>
            <Image src={bussines} alt='bussines' width={70} height={60} className=' bg-blue-500 rounded-full mb-5 p-2 md:mx-0 mx-auto'  />
              <p className=' text-black text-center md:text-start'><h1 className='md:text-start text-center text-2xl font-bold mb-3'>On Hand Great Tutor's</h1> dolor sit amet consectetur adipisicing elit. Magnam sapiente officiis, ipsam atque magni dolores ratione nihil aspernatur? Architecto similique ratione voluptas dolor accusantium facere adipisci ab, id tempora ullam!
              </p>
            </div>
            <div className=' flex flex-wrap shadow-md bg-white p-5 rounded-md'>
            <Image src={avialble} alt='bussines' width={70} height={60} className=' bg-yellow-500 rounded-full mb-5 md:mx-0 mx-auto'  />
            <p className=' text-black text-center md:text-start'> <h1 className=' md:text-start text-center text-2xl mb-3 font-bold'>24/7 Availblity Service</h1> Our tutors are always available to respond as quick as possible for you And We Always Availble For Our Students And Our Client's And For More Contact Us
            </p>
            </div>
            <div className=' flex flex-wrap shadow-md bg-white p-5 rounded-md'>
            <Image src={price} alt='bussines' width={70} height={60} className=' bg-green-500 rounded-full mb-5 md:mx-0 mx-auto'  />
              <p className=' text-black text-center md:text-start'> <h1 className='md:text-start text-center text-2xl mb-3 font-bold'>Interactive Whiteboard</h1> Our digital whiteboard equipped with audio and video chat fetures., This Feature Is Always Availble For All Of You All And We Are Delightful to Share ur New Product
              </p>
            </div>
            <div className=' flex flex-wrap shadow-md bg-white p-5 rounded-md'>
            <Image src={newimg} alt='bussines' width={70} height={60} className=' bg-pink-500 rounded-full mb-5 md:mx-0 mx-auto'  />
              <p className=' text-black text-center md:text-start'><h1 className='md:text-start text-center text-2xl font-bold mb-3'>Affordable Prices</h1> Choose an expert tutor based on your budget and per hour. And We Give Right Hours To Our Student's And We Never Make Feel Them Bad And We Have Affordable Prices Tutor On Per Hour
              </p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Why





