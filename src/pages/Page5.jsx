import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(function() {
        gsap.from(".rotateText2",{
            transform: 'rotateX(60deg)',
            delay: 1,
            duration: 1,
            opacity: 0,
            stagger: 2,
            ease: "slow(0.7,0.7,false)",
            scrollTrigger: {
                trigger: '.rotateText2',
                // markers: true,
                start: "top 85%",
                end: "top -300%",
                scrub: 2,
            }
        })
    })

  return (
    <div id='page5' className='bg-white text-center py-5'>

      <div id='rotate' className='rotateText2 mt-20'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>HELPING</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>MY</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>CLIENTS</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>TO ACHIEVE</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>THEIR</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>DREAMS!</h1>
      </div>

    </div>
  )
}

export default Page5
