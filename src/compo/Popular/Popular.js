import React from 'react'
import Item from '../Items/Item'
import data_product from '../Assets/data'

const Popular = () => {
    return (
        <div>
            <div className="popular">
                <h1 className=''>POPULAR IN WOMEN</h1>
                <hr />
                <div className="popular-item flex container">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular
