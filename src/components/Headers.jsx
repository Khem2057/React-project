import React,{ useState } from 'react'

import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
export default function Header() {
    const [toggle,setToggle] = useState(false);
    return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
            <div className='text-3xl font-bold'>
                Khem project
            </div>
            {
                toggle ?
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl
                     md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl 
                     md:hidden block'/>
            }
            <ul className='hidden md:flex text-white gap-10'>
                <li className='hover:text-black duration-300'>Home</li>
                <li className='hover:text-black duration-300'>Service</li>
                <li className='hover:text-black duration-300'>Contact</li>
                <li className='hover:text-black duration-300'>Gallery</li>
                <li className='hover:text-black duration-300'>About</li>
            </ul>
            {/* Responsive menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px]
                ${toggle ? 'left-[0]' : 'left-[-100%]'}
                `}>
                <li className='p-5 hover:text-[#2699fb] duration-300'>Home</li>
                <li className='p-5 hover:text-[#2699fb] duration-300'>Service</li>
                <li className='p-5 hover:text-[#2699fb] duration-300'>Contact</li>
                <li className='p-5 hover:text-[#2699fb] duration-300'>Gallery</li>
                <li className='p-5 hover:text-[#2699fb] duration-300'>About</li>
            </ul>
        </div>
    </div>
  )
}
