import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Description from '../DescriptionBox/Description';
import ReletedProduct from '../ReletedProduct/ReletedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <ReletedProduct />
    </div>
  )
}

export default Product
