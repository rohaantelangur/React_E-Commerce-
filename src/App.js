import './App.css';
import { Cart } from './Components/Cart';
import { Checkout } from './Components/Checkout';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { Product } from './Components/Product';
import { Footer } from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
