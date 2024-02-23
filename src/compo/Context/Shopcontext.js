import React, { createContext, useState } from 'react'
import all_product from '../Assets/all_product'
import Item from '../Items/Item';
import Product from '../Homes/Product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[Item] > 0) {
        let itemInfo = all_product.find((Product) => Product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
      return totalAmount;
    }
  }

  const ContextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;

