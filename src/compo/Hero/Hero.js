import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import Hero_img from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-cyan-200 to-transparent ">
            <div className='Hero flex container mx-auto px-20 items-center'>
                <div className="hero-left flex-1">
                    <h2 className='font-bold text-xl'>NEW ARRIVALS ONLY</h2>

                    <div className="new-icon flex items-center">
                        <h1 className='text-7xl font-bold leading-tight pe-2'>New</h1>
                        <img src={hand_icon} className='h-20' alt="" />
                    </div>

                    <h1 className='text-7xl font-bold leading-tight'>Collections</h1>
                    <h1 className='text-7xl font-bold leading-tight'>For everyone</h1>

                    <div className="btn my-5">
                        <button className='bg-red-500 flex rounded-full py-3 px-4 items-center border-none text-white'>Latest Collaction
                            <img className='ps-3' src={arrow_icon} alt="" />
                        </button>

                    </div>
                </div>

                <div className="hero-right flex-1 item-center flex justify-center">
                    <img src={Hero_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
