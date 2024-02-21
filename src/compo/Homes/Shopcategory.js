import { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import Item from '../Items/Item'

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category mx-auto container'>

      <img src={props.banner} alt="" />

      <p className="shortcategory-index container mx-auto  justify-between items-center mt-8">
        <span className='font-bold'>Showing 1-12</span> Out Of 36 products
      </p>

      {/* <div className="dropdown-icon flex items-center gap-2 border border-gray-600 p-3 px-5 rounded-full">
          Sort By <img className='h-2' src={dropdown_icon} alt="" />
        </div> */}

      <div className=" grid grid-rows-2 grid-cols-4 gap-10 container mx-auto py-10">
        {all_product.map((item, i) => {
          if (props.category === item.category)
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          else {
            return null;
          }
        })}
      </div>
      
      {/* <div className="load-more mx-auto flex justify-center my-10">
        <button className=' bg-slate-200 p-3 px-5 rounded-full'>Explore More</button>
      </div> */}
    </div>
  )
}

export default Shopcategory
