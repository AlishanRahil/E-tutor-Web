'use client'
import React from 'react'
import CountUp from 'react-countup'

const Numbercounter = () => {
  return (
    <div className=' bg-blue-600 text-white py-10 md:mt-14'>
       <div className="container grid grid-cols-2  md:grid-cols-4 gap-8 mx-auto">
        <div className=' flex flex-col items-center justify-center '>
            <p>
                <CountUp className='md:text-3xl text-xl font-bold text-white'  start={0} end={900} duration={3} delay={0.5} enableScrollSpy={true} scrollSpyOnce={true} />
            </p>
            <p  className=' md:text-3xl text-xl font-bold text-white'>Expert Tutor's</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p><CountUp className='md:text-3xl text-xl font-bold text-white'  start={0} end={20000} duration={3} delay={0.5} enableScrollSpy={true} scrollSpyOnce={true} />+</p>
            <p  className=' md:text-2xl text-xl font-bold text-white'>Hours Content</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p><CountUp className='md:text-3xl sm:text-xl font-bold text-white'  start={0} end={200} duration={3} delay={0.5} enableScrollSpy={true} scrollSpyOnce={true} /></p>
            <p  className=' md:text-3xl text-xl font-bold text-white'>Subject's</p>
        </div>
        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-bold text-xl '><CountUp start={0}  className='md:text-3xl text-xl font-bold text-white' end={500} duration={3} delay={0.5} enableScrollSpy={true} scrollSpyOnce={true} />+</p>
            <p className=' md:text-3xl text-xl font-bold text-white'>Active Student's</p>
        </div>
       </div>
    </div>
  )
}

export default Numbercounter
