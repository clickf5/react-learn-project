import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </>
  );
};

export default App;
