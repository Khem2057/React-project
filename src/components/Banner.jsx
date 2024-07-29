import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
      <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3xl md:p-[24px]'>
                Learn with us 
            </div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[24px]'>Grow with us.</h2>
            <div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
                Learn 
                <ReactTyped 
                className='pl-5'
                strings={["Web Development","App Development","Designing"]} 
                typeSpeed={100}
                loop
                backSpeed={50}
                 />
            </div>
            <button className='bg-[#00df9a] text-white p-3 mt-5 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Get started</button>
      </div>
    </div>
  )
}
