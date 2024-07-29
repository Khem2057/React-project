import React from 'react'
import laptop from "../assets/img/laptop.jpg";
export default function Experts() {
  return (
    <div className='max-w-[100%] p-2 mx-auto mx-10 md:grid grid-cols-2'>
        <div className='col-span-1 md:w-[90%] text-center'>
            <img src={laptop} alt="" className='inline' />
        </div>
        <div className='col-span-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM  EXPERTS</h1>
            <p className='my-2 text-justify'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus iure possimus, aspernatur deserunt repellendus temporibus illum. Eius aliquam ipsa consequuntur fugiat quisquam minus, blanditiis quaerat, nesciunt molestias tenetur vero.
            </p>
            <button className='w-70 md:w-[30%] bg-[#00df9a] text-white p-3 mt-5 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Start Trial</button>
        </div>
    </div>
  )
}
