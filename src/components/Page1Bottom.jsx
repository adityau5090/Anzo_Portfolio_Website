import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Page1Bottom = () => {

    useGSAP(function(){
        gsap.to("#banner img",{
            rotate: 360,
            duration: 4,
            repeat: -1,
            ease: 'linear',

        })
    })
    return (
        <div className=' absolute bottom-0 left-0 px-18 w-full flex justify-between items-end mb-3'>
            <div>
                <p className='text-[2vw] font-[anzo5]'>BRAND DESIGN | WEBSITE DESIGN</p>
                <p className='text-[2vw] font-[anzo3] text-gray-300'>BESPOKE FREELANCE</p>
            </div>
            <div id='banner'>
                <img className='mb-4' src="/Page1-bottom-img1.avif" alt="bottom-img-1" />
                <img className='mb-4' src="/Page1-bottom-img2.avif" alt="bottom-img-2" />
            </div>
        </div>
    )
}

export default Page1Bottom
