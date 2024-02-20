import React from 'react'

const Newsletter = () => {
    return (
        <div className="news mx-auto container bg-gradient-to-b from-pink-200 transparent py-10">
            <div className='w-1/2 mx-auto  flex flex-col items-center'>
                <h1 className='text-4xl font-bold leading-tight'>Get Exclusive Offers On Your Email</h1>
                <p className='text-xl leading-tight my-5'>Subscribe to our newsletter and stay updated</p>
                <div className="email rounded-full border border-dashed border-gray-600 flex justify-between w-[60%]">
                    <input className='rounded-full outline-none bg-transparent px-5' type="email" placeholder='Your Email ID' />
                    <button className='bg-black text-white p-3 rounded-full'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
