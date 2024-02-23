import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    return (
        <div className='navbar flex py-2 justify-center items-center sticky top-0 z-50 bg-white'>
            <div className='nav-logo flex justify-center items-center w-[33%]'>
                <img src={logo} alt='' className='w-16 mr-3' />
                <p className='font-bold text-xl'>SHOPPER</p>
            </div>
            <div className='nav-menu w-[33%]'>
                <ul className='flex justify-evenly items-center'>
                    <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr className='bg-red-500 h-1 font-bold' /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}><Link to='/Mens'>Men</Link>{menu === "mens" ? <hr className='bg-red-500 h-1 font-bold' /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}><Link to='/Womens'>Women</Link>{menu === "womens" ? <hr className='bg-red-500 h-1 font-bold' /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link to='/Kids'>Kids</Link>{menu === "kids" ? <hr className='bg-red-500 h-1 font-bold' /> : <></>}</li>
                </ul>
            </div>
            <div className='cart flex justify-center items-center w-[33%]'>
                <Link to='/login'><button className='rounded-2xl px-6 py-1 border-2 text-base me-2'>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className='h-9'/></Link>
            </div>
        </div>
   
    )
}

export default Navbar
