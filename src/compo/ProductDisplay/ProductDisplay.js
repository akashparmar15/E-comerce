import React, { useContext, useEffect } from 'react'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/Shopcontext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='productdisplay container mx-auto flex gap-10'>
            <div className="display-left flex flex-1">
                <div className="product-img-list">
                    <img className='h-40 w-40 mb-4' src={product.image} alt="" />
                    <img className='h-40 w-40 mb-4' src={product.image} alt="" />
                    <img className='h-40 w-40 mb-4' src={product.image} alt="" />
                    <img className='h-40 w-40' src={product.image} alt="" />
                </div>
                <div className="product-main-img ml-5">
                    <img className=' h-full ' src={product.image} alt="" />
                </div>
            </div>
            <div className="display-right pt-2 flex-1">
                <h1 className='font-bold text-2xl pr-32'>{product.name}</h1>
                <div className="product-right-star flex my-5">
                    <img className='h-5 pe-1' src={star_icon} alt="" />
                    <img className='h-5 px-1' src={star_icon} alt="" />
                    <img className='h-5 px-1' src={star_icon} alt="" />
                    <img className='h-5 px-1' src={star_icon} alt="" />
                    <img className='h-5 px-1' src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-right-price flex mt-8 text-2xl">
                    <div className="product-old-price pe-5  line-through"> ${product.old_price}</div>
                    <div className="product-new-price font-bold text-red-500"> ${product.new_price}</div>
                </div>
                <div className="right-description mt-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse
                    fuga alias totam perspiciatis sequi veniam adipisci eaque, odio assumenda
                    quia omnis quae laborum officia velit quod aliquid, praesentium vel.
                </div>
                <div className="right-size mt-12">
                    <h1 className='font-bold text-gray-500 text-xl'>Select Size</h1>
                    <div className="product-right-size flex py-5 gap-5">
                        <div className='h-12 w-12 border-2 border-gray-500 justify-center flex items-center'>S</div>
                        <div className='h-12 w-12 border-2 border-gray-500 justify-center flex items-center'>M</div>
                        <div className='h-12 w-12 border-2 border-gray-500 justify-center flex items-center'>L</div>
                        <div className='h-12 w-12 border-2 border-gray-500 justify-center flex items-center'>Xl</div>
                        <div className='h-12 w-12 border-2 border-gray-500 justify-center flex items-center'>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }} className='text-white bg-red-500 px-5 py-3 mt-8'>ADD TO CART</button>
                <div className="mt-12">
                    <p><span className='font-bold'>Category : </span>Women, T-shirt , Crop Top</p>
                    <p><span className='font-bold'>Tags : </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    )
}
export default ProductDisplay
