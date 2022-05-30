import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LangSelector from './LangSelector';
import MobileMenu from './MobileMenu';

export default function MainMenu() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };
  /* Animation Burger  : https://codepen.io/elitsa_dimitrova/pen/LJWBVo  */
  return (
    <nav>
      <div className="menu">
        <button
          type="button"
          id="burgerBtn"
          className={`menuBurger ${burgerOpen ? 'isOpen' : 'notOpen'}`}
          onClick={toggleBurger}
        >
          <span className="burger" />
          <span className="burger" />
          <span className="burger" />
          <span className="iconLabel" />
        </button>
        <div className="menuLeft">
          <a href="#">Vêtements</a>
          <a href="#">Accessoires</a>
        </div>
        <div className="menuMid">
          <a href="#">
            <img src="./assets/img/logo-horiz.png" alt="Every Moment" />
          </a>
        </div>
        <div className="menuRight">
          <div className="menuRight__links">
            <a href="#">À propos</a>
            <a href="#">Journal</a>
          </div>
          <div className="menuRight__pictograms">
            <a href="#">Compte</a>
            <a href="#">Panier</a>
          </div>
        </div>
      </div>
      <span className="menuDecoration" />
      <MobileMenu isOpen={burgerOpen} />
    </nav>
  );
}
