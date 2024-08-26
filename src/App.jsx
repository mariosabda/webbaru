import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/navbar';
import "./App.css";
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Footer from './components/footer';
import Partner from './components/partner';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Partner />
      <Footer />
    </div>
  )
}

export default App
