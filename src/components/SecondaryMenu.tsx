import React from 'react';
import { Link } from 'react-router-dom';

export default function SecondaryMenu() {
  return (
    <nav className="secondaryMenu">
      <a href="#about__history">Histoire</a>
      <a href="#about__eco">Eco</a>
      <a href="#about__ethics">Ethique</a>
    </nav>
  );
}
