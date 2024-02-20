import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offer/Offers'
import Newcollection from '../Newcollection/Newcollection'
import Newsletter from '../Newsletter/Newsletter'
import Shopcategory from './Shopcategory'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import { ShopContext } from '../Context/Shopcontext'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Newcollection />
            <Newsletter />
            <Shopcategory />
            <ShopContext />
            <ProductDisplay />
        </div>
    )
}

export default Shop
