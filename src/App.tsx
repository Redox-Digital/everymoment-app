import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import About from './pages/About';

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
