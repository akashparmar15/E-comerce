import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offer/Offers'
import Newcollection from '../Newcollection/Newcollection'
import Newsletter from '../Newsletter/Newsletter'
import Shopcategory from './Shopcategory'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Newcollection />
            <Newsletter />
            <Shopcategory />
        </div>
    )
}

export default Shop
