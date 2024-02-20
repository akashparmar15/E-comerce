import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Items/Item'
const Newcollection = () => {
    return (
        <div>
            <div>
                <div className="new-colletions">
                    <h1 className="text-5xl font-bold text-center pt-10">NEW COLLECTIONS</h1>
                    <hr className="mx-auto bg-black h-1.5 w-52 my-4" />
                    <div className="popular-item grid grid-rows-2 grid-cols-4 gap-10 container mx-auto py-10">
                        {new_collection.map((item, i) => {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newcollection
