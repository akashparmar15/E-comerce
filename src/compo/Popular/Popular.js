import React from 'react'
import Item from '../Items/Item'
import data_product from '../Assets/data'

const Popular = () => {
    return (
        <div>
            <div className="popular py-10">
                <h1 className="text-5xl font-bold text-center">POPULAR IN WOMEN</h1>
                <hr className="mx-auto bg-black h-1.5 w-52 my-4"/>
                <div className="popular-item flex container mx-auto gap-10 py-10">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular
