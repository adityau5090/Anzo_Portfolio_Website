import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const mouseMoving = (e) => {
    // console.log(e.clientX, e.clientY)
    // console.log(tiltRef.current.getBoundingClientRect())
    // console.log(tiltRef.current.getBoundingClientRect().x)
    // console.log(tiltRef.current.getBoundingClientRect().width)    


    // console.log("X: ",(e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2))
    // console.log("Y: ",(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2))

    
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 30)
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10)
  }

  useGSAP(function () {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1.5,
      ease: "slow(0.7,0.7,false)"
    })
  }, [xVal, yVal])


  return (
    <div onMouseMove={(e) => { mouseMoving(e) }} className='h-screen p-2 bg-white w-[99vw]'>
      <div id='page1-in' className=' relative h-full p-18 w-full shadow-xl shadow-gray-700  bg-[url(/ANZO.avif)] bg-cover bg-center rounded-3xl'>
        <img src="/Frame-53.png" className='h-20 ' alt="Frame PNG" />
        <TiltText angle={tiltRef}/>
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page1
