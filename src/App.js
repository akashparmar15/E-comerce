import './App.css';
import Cart from './compo/Homes/Cart';
import LoginSignup from './compo/Homes/Login';
import Product from './compo/Homes/Product';
import Navbar from './compo/Navbar/Navbar';
import Shopcategory from './compo/Homes/Shopcategory';
import Shop from './compo/Homes/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import men_banner from './compo/Assets/banner_mens.png'
import women_banner from './compo/Assets/banner_women.png';
import kid_banner from './compo/Assets/banner_kids.png'


import Footer from './compo/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
