import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
    return (
        <div className="offer flex container mx-auto items-center justify-evenly bg-gradient-to-b from-pink-200 transparent">
            <div className="offer-left ">
                <p className='text-7xl font-bold leading-snug'>Exclusive</p>
                <p className='text-7xl font-bold leading-snug'>Offers For You</p>
                <p className='font-bold text-xl leading-relaxed'>ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='bg-red-500 rounded-full my-5 py-3 px-10 font-bold leading-relaxed text-white'>Check Now</button>
            </div>
            <div className="offer-right ">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
