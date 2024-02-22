import React from 'react'
import Item from '../Items/Item'
import data_product from '../Assets/data';

const ReletedProduct = () => {
    return (
        <div className='relatedproduct container mx-auto'>
            <h1 className='text-center font-semibold text-4xl'>Related Products</h1>
            <hr className="mx-auto bg-black h-1.5 w-52 my-4" />
            <div className="related-item flex gap-10">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default ReletedProduct
