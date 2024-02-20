import React from 'react'

const Item = (props) => {
    return (
        <div className='item flex justify-center flex-col scale-100 hover:scale-105 transition-all shadow-md p-10'>
            <img src={props.image} alt="" />
            <p className="py-3.5">{props.name}</p>
            <div className="item-prices flex">
                <div className="item-new-price pe-3 font-bold">
                    ${props.new_price}
                </div>
                <div className="item-old-price line-through">
                    ${props.old_price}
                </div>

            </div>
        </div>
    )
}

export default Item
