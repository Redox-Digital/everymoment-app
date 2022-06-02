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
          <Link to="#">Vêtements</Link>
          <Link to="#">Accessoires</Link>
        </div>
        <div className="menuMid">
          <Link to="/">
            <img src="./assets/img/logo-horiz.png" alt="Every Moment" />
          </Link>
        </div>
        <div className="menuRight">
          <div className="menuRight__links">
            <Link to="about">À propos</Link>
            <Link to="journal">Journal</Link>
          </div>
          <div className="menuRight__pictograms">
            <Link to="#">
              <i className="fa-solid fa-user" />
              <span className="iconLabel">Compte</span>
            </Link>
            <Link to="#">
              <i className="fa-solid fa-bag-shopping" />
              <span className="iconLabel">Panier</span>
            </Link>
          </div>
        </div>
      </div>
      <span className="menuDecoration" />
      <MobileMenu isOpen={burgerOpen} />
    </nav>
  );
}
