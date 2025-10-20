import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen bg-white p-7'>
      <div className='h-full w-full bg-black rounded-4xl flex relative overflow-hidden'>
            <video autoPlay loop muted className='w-full h-[100%] object-cover' src="/moon.mp4"></video>
            <h4 className='absolute text-white -bottom-20 left-20 text-[35vw] font-[anzo4]'>ABOUT</h4>
      </div>
    </div>
  )
}

export default Page6
