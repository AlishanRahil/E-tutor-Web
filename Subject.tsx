import React from 'react'
import { FaBook } from 'react-icons/fa'
import Subject2 from './Subject2'

const Subject = () => {
  return (
    <div className=' py-24 '>
      <div className="container mx-auto">
            <div className=' flex flex-col items-center justify-center  mb-10'>
                <p className=' text-orange-500 font-bold text-lg mb-2'>Our tutor subjects</p>
                <h1 className=' text-2xl md:text-3xl font-bold  w-full text-center '>
                Find Online Tutor In Any Subject
                </h1>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-5  items-center justify-center">

        <div className=' flex  items-center justify-center shadow-md rounded-md bg-white border-b-2 transition-transform hover:scale-105 duration-300 border-blue-500  w-[250px] p-4 gap-2 mx-auto'>
        <FaBook color='purple'/>
        <p>English</p>
        </div>

        <div className=' flex items-center   justify-center mx-auto  shadow-md rounded-md border-b-2 transition-transform hover:scale-105 duration-300 bg-white border-blue-500 w-[250px] p-4 gap-2'>
        <FaBook  color='cyan'/>
        <p>Maths</p>
        </div>

        <div className=' flex items-center   justify-center  mx-auto shadow-md rounded-md border-b-2 transition-transform hover:scale-105 duration-300 bg-white border-blue-500 w-[250px] p-4 gap-2'>
        <FaBook  color='orange'/>
        <p>Science</p>
        </div>

        <div className=' flex items-center   mx-auto justify-center shadow-md rounded-md bg-white border-b-2 border-blue-500 w-[250px] transition-transform hover:scale-105 duration-300 p-4 gap-2'>
        <FaBook color='red' />
        <p>Physics</p>
        </div>

        <div className=' flex items-center   mx-auto justify-center shadow-md rounded-md bg-white border-b-2 border-blue-500 w-[250px] transition-transform hover:scale-105 duration-300 p-4 gap-2'>
        <FaBook  color='blue'/>
        <p>Chemistry</p>
        </div>

        <div className=' flex items-center  mx-auto justify-center shadow-md rounded-md bg-white border-b-2 border-blue-500 w-[250px] transition-transform hover:scale-105 duration-300 p-4 gap-2'>
        <FaBook color='yellow'/>
        <p>Geography</p>
        </div>

        <div className=' flex items-center  mx-auto justify-center shadow-md rounded-md bg-white border-b-2 border-blue-500 w-[250px] transition-transform hover:scale-105 duration-300 p-4 gap-2'>
        <FaBook  color='blue'/>
        <p>Econmoics</p>
        </div>

        <div className=' flex items-center  mx-auto justify-center shadow-md rounded-md bg-white border-b-2 border-blue-500 w-[250px] transition-transform hover:scale-105 duration-300 p-4 gap-2'>
        <FaBook   color='green'/>
        <p>Biology</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Subject


