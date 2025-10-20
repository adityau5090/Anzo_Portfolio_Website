import React from 'react'

const Page2img = () => {
  return (
    <div className='w-[100%] h-[250vh] relative flex  justify-center bg-white'>
      <img className='h-full object-cover' src="/Astro-img.avif" alt="Astronaut image" />
      <div className='h-[1px] w-full bg-gray-500 absolute bottom-0'></div>
    </div>
  )
}

export default Page2img
