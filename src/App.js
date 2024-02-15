import './App.css';
import Cart from './compo/Homes/Cart';
import LoginSignup from './compo/Homes/Login';
import Product from './compo/Homes/Product';
import Navbar from './compo/Navbar/Navbar';
import Shopcategory from './compo/Homes/Shopcategory';
import Shop from './compo/Homes/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './compo/Hero/Hero';
import Popular from './compo/Popular/Popular';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory category="men" />} />
          <Route path='/womens' element={<Shopcategory category="women" />} />
          <Route path='/kids' element={<Shopcategory category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Hero />
        <Popular />
      </BrowserRouter>
    </div>
  );
}

export default App;
