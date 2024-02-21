import React from 'react'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='productdisplay'>
            <div className="display-left">
                <div className="product-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-main-img">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="display-right">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="product-right-price">
                    <div className="product-old-price"> ${product.old_price}</div>
                    <div className="product-new-price"> ${product.new_price}</div>
                </div>
                <div className="right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse
                    fuga alias totam perspiciatis sequi veniam adipisci eaque, odio assumenda
                    quia omnis quae laborum officia velit quod aliquid, praesentium vel.
                </div>
                <div className="right-size">
                    <h1>Select Size</h1>
                    <div className="product-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>Xl</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p><span>Category : </span>Women, T-shirt , Crop Top</p>
                <p><span>Tags : </span>Modern, Latest</p>
            </div>
        </div>
    )
}
export default ProductDisplay
