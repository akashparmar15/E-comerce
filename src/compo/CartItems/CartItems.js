import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='container mx-auto'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='py-5'>Products</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Totle</th>
                        <th>Remove</th>
                    </tr>
                </thead>

                {/* <hr className='my-3' /> */}
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <tbody className="format border border-bashed border-gray-400">
                                <tr>
                                    <td className='flex justify-center'> <img className='h-20 ' src={e.image} alt="" /></td>
                                    <td className='text-center'><p className='me-10'>{e.name}</p></td>
                                    <td className='text-center'> <p>${e.new_price}</p></td>
                                    <td className='text-center'> <button>{cartItems[e.id]}</button></td>
                                    <td className='text-center'><p>${e.new_price * cartItems[e.id]}</p></td>
                                    <td> <img className='h-5 mx-auto' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" /></td>
                                </tr>
                            </tbody>
                            // <hr className=' my-3 bg-gray-500' />
                        )
                    }
                    return null;
                })}
            </table>

            <div className="cart-down flex container mx-auto my-10">
                <div className="cart-total flex-1 ">
                    <h1 className='font-bold text-2xl'>Cart Total</h1>
                    <div>
                        <div className="total-item flex justify-between my-3">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="free flex justify-between my-3">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="total flex justify-between font-bold my-3">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button className='bg-red-500 text-white px-5 py-2 my-5'>Proceed To CheckOut</button>
                </div>
                <div className="promo-code flex-1 px-10">
                    <p className='mb-4 font-semibold'>If You have a Promo Code, Enter It Here</p>
                    <div className="promobox rounded-full border border-dashed border-gray-600 flex justify-between w-[60%]">
                        <input className='rounded-full outline-none bg-transparent px-5' type="text" placeholder='Enter Promo Code' />
                        <button className='bg-black text-white px-8 py-3 rounded-full'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
