import React from 'react'
import web_development from "../assets/img/web_development.png";
import digital_marketing from "../assets/img/digital_marketing.png";
import app_development from "../assets/img/app_development.png";

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[80%] mx-auto md:grid grid-cols-3 gap-6 text-center font-bold'>
            <div className="shadow-xl h-[500px] my-4 hover:scale-105 hover:bg-gray-100 duration-500">
                <img src={web_development} alt="" className='h-[30%] inline' />
                <h1 className='font-bold text-xl'>Web Development</h1>
                <p className='font-bold text-4xl pt-3'>$149</p><br />
                <p>Lorem lpsum is simply</p><br />
                <p>lorem lpsum is simply dummy tet of the printing </p><br />
                <p>Lorem lpsum is simply dumm.</p> <br />
                <button className='bg-[#00df9a] text-white p-3 mt-5 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Start Trial</button>
            </div>
            <div className="shadow-xl h-[500px] my-4  hover:scale-105 hover:bg-gray-100 duration-500 ">
                <img src={digital_marketing} alt="" className='h-[30%] inline' />
                <h1 className='font-bold text-xl'>Digital Marketing</h1>
                <p className='font-bold text-4xl pt-3'>$149</p><br />
                <p>Lorem lpsum is simply</p><br />
                <p>lorem lpsum is simply dummy tet of the printing </p><br />
                <p>Lorem lpsum is simply dumm.</p> <br />
                <button className='bg-[#00df9a] text-white p-3 mt-5 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Start Trial</button>
            </div>
            <div className="shadow-xl h-[500px] my-4 hover:scale-105 hover:bg-gray-100 duration-500">
                <img src={app_development} alt=""  className='h-[30%] inline' />
                <h1 className='font-bold text-xl'>App Development</h1>
                <p className='font-bold text-4xl pt-3'>$149</p><br />
                <p>Lorem lpsum is simply</p><br />
                <p>lorem lpsum is simply dummy tet of the printing </p><br />
                <p>Lorem lpsum is simply dumm.</p><br />
                <button className='bg-[#00df9a] text-white p-3 mt-5 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}
