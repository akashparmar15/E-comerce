import React from 'react'

const Newsletter = () => {
    return (
        <div className="news mx-auto container items-center justify-center bg-gradient-to-b from-pink-200 transparent">
            <div className=' justify-center items-center '>
                <h1 className='text-5xl font-bold'>Get Exclusive Offers On Your Email</h1>
                <p className='text-xl'>Subscribe to our newsletter and stay updated</p>
                <div className="email">
                    <input type="email" placeholder='Your Email ID' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
