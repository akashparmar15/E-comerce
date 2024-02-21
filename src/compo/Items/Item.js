import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item flex justify-center flex-col scale-100 hover:scale-105 transition-all shadow-md p-10'>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
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
    );
};

export default Item;

