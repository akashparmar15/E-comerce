import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    return (
        <div className='navbar flex py-2 justify-center items-center w-full'>
            <div className='nav-logo flex justify-center items-center w-[33%]'>
                <img src={logo} alt='' className='w-16 mr-3' />
                <p className='font-bold text-xl'>SHOPPER</p>
            </div>
            <div className='nav-menu w-[33%]'>
                <ul className='flex justify-evenly items-center'>
                    <li onClick={()=>{setMenu("shop")}}>Shop</li>
                    <li onClick={()=>{setMenu("mens")}}>Men</li>
                    <li onClick={()=>{setMenu("womens")}}>Women</li>
                    <li onClick={()=>{setMenu("kids")}}>Kids</li>
                </ul>
            </div>
            <div className='cart flex justify-center items-center w-[33%]'>
                <button className='rounded-2xl px-6 py-1 border-2 text-base me-2'>Login</button>
                <img src={cart_icon} alt="" className='h-9' />
            </div>
        </div>
    )
}

export default Navbar
