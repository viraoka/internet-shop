import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Home from './Home';
import Shop from './Shop';
import AboutProduct from './AboutProduct';

function App() {
  return <Router>

    <nav>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/about">About us</Link>
      <Link className='link' to="/contactus">Contact us</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<Shop/>}/>
      <Route path='/about/:title' element={<AboutProduct/>}/>
    </Routes>

    </Router>
}

export default App;
