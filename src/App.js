import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Header/Navbar";
import Home from './Components/Pages/Home';
import About from './Components/Pages/Aboutus';
import Contact from './Components/Pages/Contact';
import ProductCategory from './Components/Pages/ProductCategory';
import productslist from './Components/Pages/productslist';
import Productdescription from './Components/Pages/Productdescriptionpage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {Object.keys(productslist).map(category => (
            <Route key={category} path={`/${category}`} element={<ProductCategory category={category} products={productslist[category]} />} />
          ))}
          {/* Updated route for product description */}
          <Route path='/product/:category/:productId' element={<Productdescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
