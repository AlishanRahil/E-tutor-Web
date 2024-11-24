import React from 'react'
import { FaBook } from 'react-icons/fa'

const Subject2 = () => {
  return (
    <div className=' py-12'>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-5">
        <div className=' flex items-center justify-center shadow-md rounded-md bg-yellow-500 w-[250px] p-2'>
        <FaBook />
        <p>English</p>
        </div>

        <div className=' flex items-center justify-center shadow-md rounded-md bg-yellow-500 w-[250px] p-2'>
        <FaBook />
        <p>English</p>
        </div>

        <div className=' flex items-center justify-center shadow-md rounded-md bg-yellow-500 w-[250px] p-2'>
        <FaBook />
        <p>English</p>
        </div>

        <div className=' flex items-center justify-center shadow-md rounded-md bg-yellow-500 w-[250px] p-2'>
        <FaBook />
        <p>English</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Subject2
