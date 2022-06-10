import './App.css';
import { Cart } from './Components/Cart';
import { Navbar } from './Components/Navbar';
import { Products } from './Components/Products';
import { Product } from './Components/Product';
import { Footer } from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import RequiredAuth from './HOF/RequiredAuth';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<RequiredAuth ><Products /></RequiredAuth>} />
        <Route path="/product/:id" element={<RequiredAuth ><Product /></RequiredAuth>} />
        <Route path="/cart" element={<RequiredAuth><Cart /></RequiredAuth>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
