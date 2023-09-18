import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from'./components/pages/Home.js';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUP';
import Products from './components/pages/Products';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='products' Component={Products} />
        <Route path='/sign-up' Component={SignUp} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
