import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Header/Navbar";
import Home from './Components/Pages/Home';
import About from './Components/Pages/Aboutus';
import Contact from './Components/Pages/Contact';
import ProductCategory from './Components/Pages/ProductCategory';
import productslist from './Components/Pages/productslist'
// import Productdescription from './Components/Pages/Productdescriptionpage'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Carpenter" element={<ProductCategory category="CARPENTER TRADE" products={productslist.Carpenter} />}/>
          <Route path="/Electrical" element={<ProductCategory category="ELECTRICAL TRADE" products={productslist.Electrical} />}/>
          <Route path="/Electronic_Mechanic" element={<ProductCategory category="ELECTRONIC MECHANIC TRADE" products={productslist.Electronic_Mechanic}  />}/>
          <Route path="/Fitter_Trade" element={<ProductCategory category="FITTER TRADE" products={productslist.Fitter_Trade}/>}/>
          <Route path="/Hydraulic_Trade" element={<ProductCategory category="HYDRUALIC & PNEUMATIC TRADE" products={productslist.Hydraulic_Trade} />}/>
          <Route path="/Motor_Trade" element={<ProductCategory category="MOTOR MECHANIC VEHICLE TRADE" products={productslist.Motor_Trade} />}/>
          <Route path="/Refridegration_Trade" element={<ProductCategory category="REFRIDGERATION AND AIR CONDITIONING TRADE" products={productslist.Refridegration_Trade} />}/>
          <Route path="/Solar_Trade" element={<ProductCategory category="SOLAR TRADE" products={productslist.Solar_Trade} />}/>
          <Route path="/Welder_Trade" element={ <ProductCategory category="WELDER TRADE" products={productslist.Welder_Trade} />}/>
          {/* <Route path="/product-description/:productId" element={<Productdescription  />} /> */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
