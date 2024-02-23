import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
    return (
        <div>
            <div className="footer py-10 w-1/3 mx-auto  sm:w-2/3">
                <div className="footer-logo flex items-center justify-center space-x-2">
                    <img src={footer_logo} alt="" />
                    <p className='font-bold text-3xl'>SHOOPER</p>
                </div>
                <ul className="footer-link flex justify-evenly text-center my-5">
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="social-icon flex justify-center my-5">
                    <div className="icons md:mx-5">
                        <img src={instagram_icon} alt="" />
                    </div>
                    <div className="icons md:mx-5 mx-5">
                        <img src={pintester_icon} alt="" />
                    </div>
                    <div className="icons md:mx-5">
                        <img src={whatsapp_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="copy-right text-center font-semibold container mx-auto ">
                <hr className='bg-black' />
                <p className='py-3'>COPYRIGHT © 2023 ALL RIGHT RESERVED By AKASH PARMAR</p>
            </div>
        </div>
    )
}

export default Footer
