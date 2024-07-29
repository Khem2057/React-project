import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[100%] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
            <span className='text-white'>
                Sign up to our newsletter and stay up to date.
            </span>
        </div>
        <div className="m-2">
            <input type="text" className='sm:w-full rounded mb-2 p-3 mr-2 text slate-600' placeholder='Email' />
            <button className='bg-[#00df9a] text-white p-3 mb-3 mt-1 rounded hover:bg-white hover:text-[#00df9a] duration-300'>Get started</button>
            <br />
            <p className='text-white'>
                We care about the protection of your data. Read our <br />   Privacy Policy 
            </p>
        </div>
        </div>
    </div>
  )
}
