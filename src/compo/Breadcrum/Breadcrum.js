import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum flex container mx-auto items-center my-14'>
        HOME <img className='mx-2 h-4' src={arrow_icon} alt="" />SHOP <img className='mx-2 h-4' src={arrow_icon} alt="" />{product.category} <img className='mx-2 h-4' src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadcrum
