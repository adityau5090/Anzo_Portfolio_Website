import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen bg-white p-9'>
      <div className='h-full w-full bg-black rounded-2xl flex overflow-hidden'>
        <div className='w-1/2 relative pl-10'>
          <h3 className='text-[35vh] font-[anzo4] leading-35'>WHAT</h3>
          <h4 className='text-[35vh] font-[anzo4] leading-65'>I DO</h4>
          <div className='pl-5'>
            <p className='text-[3.5vh] font-[anzo5]'>I DESIGN AND DEVELOP</p>
            <p className='text-[3.5vh] font-[anzo3]'>MODERN, IMPACTFUL AND LUXURIOUS</p>
            <p className='text-[3vh] font-[anzo5]'>websites that seamlessly bridge your goals</p>
            <p className='text-[3vh] font-[anzo5]'>with needs of your clients.</p>
          </div>
        </div>
        <div className='w-1/2 '>
          <video autoPlay loop muted className='w-full h-[100%] object-cover' src="/rounded-planet.mp4"></video>
        </div>
      </div>
    </div>
  )
}

export default Page4
