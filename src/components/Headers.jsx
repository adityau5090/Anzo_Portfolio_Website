import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Headers = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 p-15 mt-7'>
      <button className='bg-black py-3 px-7 rounded-full border-2 border-white hover:bg-gray-700 cursor-pointer'>Hire me</button>
      <i className="ri-more-2-fill text-2xl ml-1"></i>
    </div>
  )
}

export default Headers
