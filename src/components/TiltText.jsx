import React from 'react'

const TiltText = (props) => {

  return (
    <div id='tiltDiv' ref={props.angle} className='mt-20 ml-12'>
          <h1 className='text-[4vw] font-[anzo5] leading-[4vw]'>I AM <span className='text-black font-[anzo1]'>DARK MODE</span>™</h1>
          <h1 className='text-[7.5vw] font-[anzo1] leading-[7vw]'>DESIGNER</h1>
          <h1 className='text-[4.5vw] font-[anzo5] leading-[5vw]'>TO HIRE</h1>
        </div>
  )
}

export default TiltText
