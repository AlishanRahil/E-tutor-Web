'use client'
import React, { useState } from 'react'
import { MdComputer } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import {motion} from 'framer-motion'
import Responsive from './Responsive';
const Navbar = () => {

    const [IsOpen , setopen] = useState(false)
  return (
    <>
    <nav className=''>
      <div className='  container flex items-center justify-between py-6 mx-auto'>
        <div className=' text-2xl flex items-center gap-2 font-bold'>
         <div className=' ml-5 md:ml-0' >
         <MdComputer color='blue' />
         </div>
         <p>E-Tutor</p>
        </div>
        <div className=' hidden lg:block'>
            <ul>
                <a href="" className=' inline-block text-gray-800  font-bold px-2 xl:px-3 py-1 text-lg hover:text-yellow-400'><li>Home</li></a>
                <a href="" className=' inline-block text-gray-800  font-bold px-2 xl:px-3 py-1 text-lg hover:text-yellow-400'><li>About</li></a>
                <a href="" className=' inline-block text-gray-800 font-bold px-2 xl:px-3 py-1 text-lg hover:text-yellow-400'><li>Service</li></a>
                <a href="" className=' inline-block text-gray-800  font-bold px-2 xl:px-3 py-1 text-lg hover:text-yellow-400'><li>Contact</li></a>
            </ul>
        </div>
        <div className=' hidden lg:block  space-x-5'>
            <button className=' font-semibold'>Sing-in</button>
            <button className=' font-semibold text-white bg-blue-500 rounded-full px-6 py-2'>Resgister</button>

        </div>
        <div className=' lg:hidden' onClick={() => {setopen(!IsOpen)}}>
            <div className=' text-2xl mx-5'>
            <MdMenu />
            </div>
        </div>
      </div>
    <Responsive IsOpen={IsOpen} onClose={() => {setopen(false)}}/>
    </nav>
    </>
  )
}

export default Navbar

