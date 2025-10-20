import React from 'react'

const Page3 = () => {
  return (
    <div className='relative h-screen bg-white flex justify-center items-center'>
        <img className='absolute h-[75vh] z-20' src="/laptop-img.avif" alt="laptop image" />
      <video autoPlay loop muted className='h-[56vh] w-[50vw] relative z-10' src="/file.mp4"></video>
      <div className='h-0.5 w-4/7 top-[30%] bg-black absolute z-0' ></div>
      <div className='h-0.5 w-3/4 top-[50%] bg-black absolute z-0' ></div>
      <div className='h-0.5 w-5/5 top-[70%] bg-black absolute z-0' ></div>
    </div>
  )
}

export default Page3
