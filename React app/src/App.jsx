import React from 'react';
import Card1 from './components/Card1';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Card1 user="ali" age={80} />
      <Card1 />
      <Card/>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
