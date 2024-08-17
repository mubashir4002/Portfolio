import React from 'react';

import About from './Components/About';
import './index.css';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Home from './Components/Home';
import  Navbar from './Components/Navbar';



const App = () => {
  return (
    <main>
    <Home/> 
    <About/>
    <Services/>
    <Portfolio/>
    <ContactUs/>
    <Footer/>
    </main>
  );
}

export default App;
