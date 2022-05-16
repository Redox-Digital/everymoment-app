import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
