import React from 'react'
import Image from 'next/image'
import Herso from '../Assets/hero-Dv8sjFKx (1).png'
import { FaPlay } from 'react-icons/fa'
const Hero = () => {
  return (
    <div  className=' container mx-auto  grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative mt-5 md:mt-0'>
       <div  className="text-center md:text-left flex flex-col justify-center md:pr-15 xl:pr-40 py-15 space-y-6">
         <p className=' font-bold text-orange-500 uppercase'>100% Satisfaction Guarantee</p>
         <h1 className="font-bold md:text-5xl lg:text-6xl leading-tight text-6xl">Find Your Perfect <span className=' text-yellow-300 font-bold'>Tutor</span></h1>

         <p className='w-full font-bold'>We help you find perfect tutor for 1-on-1 lessons. <br />
          It is completely free and private</p>


      <div className=' flex justify-center gap-4 md:justify-start items-start'>
      <button className=' bg-yellow-400  font-bold  px-6 py-3 rounded-full'>Get Started</button>
      <button className=' flex justify-end items-center gap-2 font-semibold  mt-1 text-lg'>
       <span className=' flex w-10 h-10  bg-blue-400 rounded-full justify-center items-center'>
        <FaPlay color='blue'/>
   </span>
   See How It Work
       </button>
      </div>
       </div>

       <div>
        <Image src={Herso}  alt='wait' className=' '/>
       </div>
    </div>
  )
}

export default Hero




// import React from 'react';
// import Image from 'next/image';
// import Herso from '../Assets/hero-Dv8sjFKx (1).png';

// const Hero = () => {
//   return (
//     <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
//       {/* Left Section */}
//       <div className="text-center md:text-left flex flex-col justify-center md:pr-15 xl:pr-40 py-15 space-y-6">
//         <p className="font-bold text-orange-500 uppercase">100% Satisfaction Guarantee</p>
//         <h1 className="font-bold md:text-5xl lg:text-6xl leading-tight text-2xl">
//           Find Your Perfect <span className="text-yellow-300 font-bold">Tutor</span>
//         </h1>
//         <p className=' w-full'>We help you find perfect tutor for 1-on-1 lessons. <br /> It is completely free and private.</p>
//         <div className='flex justify-center gap-4 md:justify-start items-start'>
//   <button className="bg-blue-500 text-white px-6 py-2 rounded-full">Get Started</button>
//   <button className="bg-gray-100 text-blue-500 px-6 py-2 rounded-full">See How It Works</button>
// </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center justify-center">
//         <Image src={Herso} alt="Tutor Hero Image" />
//       </div>
//     </div>
//   );
// };

// export default Hero;

