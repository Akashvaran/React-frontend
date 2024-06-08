import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import { Home } from '../Home.js';


const Rouding = () => {
  return (
    <div className='main-content'>
      <BrowserRouter>
        <Navbar />
        <div className='navbar-components'>

          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>

        </div>
      </BrowserRouter>
    </div>

  );
};

export default Rouding;
