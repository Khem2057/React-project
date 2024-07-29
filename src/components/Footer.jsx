import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px] '>
      <div className='w-[100%] px-[50px]'>
        <h1 className='text-black font-bold text-3xl '>Khem Tech.</h1>
        <div className='grid grid-cols-5 gap-10 text-white'>
            <div className='col-span-2'>
                <br /><p className=''>Lorem, ipsum  asdlf as   sdlfo a sf o aosjid fo sdkfo aisj dfaos dijf asdof ia sdf oaise  zkldfka  sdfo aijer  sdf oaeij  dasldf oaie sf ao dolor sit amet consectetur adipisicing elit. In, minima quibusdam omnis provident perferendis inventore error eligendi tenetur</p><br />
                <div className='grid grid-cols-4 '>
                    <div>f</div>
                    <div>i</div>
                    <div>t</div>
                    <div>g</div>
                </div>
            </div>
            <div className='grid gap-y-3'>
                <h2 className='font-bold text-black'>Solutions</h2>
                <div>Analytics</div>
                <div>Marketing</div>
                <div>Commerce</div>
                <div>Insights</div>
            </div>
            <div className='grid gap-y-3'>
                <h2 className='font-bold text-black'>Support</h2>
                <div>Pricing</div>
                <div>Documentation</div>
                <div>Guides</div>
                <div>API Status</div>
            </div>
            <div className='grid gap-y-3'>
                <h2 className='font-bold text-black'>Company</h2>
                <div>About</div>
                <div>Blog</div>
                <div>Jobs</div>
                <div>Press</div>
                <div>Careers</div>
            </div>
        </div>
      </div>
    </div>
  )
}
