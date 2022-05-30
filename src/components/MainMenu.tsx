import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LangSelector from './LangSelector';

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
      <div className={`menuMobile ${burgerOpen ? 'd-flex' : 'd-none'}`}>
        <details className="menuMobile__lvl1">
          <summary>
            <h2>Vêtements</h2>
          </summary>
          <div className="menuMobile__lvl2">
            <details>
              <summary>
                <h3>Homme</h3>
              </summary>
              <div className="menuMobile__lvl3">
                <Link to="#">Vestes, Gilets</Link>
                <Link to="#">Couches intermédiaires</Link>
                <Link to="#">T-shirts, pulls</Link>
                <Link to="#">Pantalons</Link>
              </div>
            </details>
            <details>
              <summary>
                <h3>Femme</h3>
              </summary>
              <div className="menuMobile__lvl3">
                <Link to="#">Vestes, Gilets</Link>
                <Link to="#">Couches intermédiaires</Link>
                <Link to="#">T-shirts, pulls</Link>
                <Link to="#">Pantalons</Link>
              </div>
            </details>
          </div>
        </details>
        <details className="menuMobile__lvl1">
          <summary>
            <h2>Accessoires</h2>
          </summary>
          <Link to="#">Sacs</Link>
          <Link to="#">Bonnets</Link>
        </details>
        <Link to="#">Mon compte</Link>
        <Link to="#">Mon panier</Link>
        <Link to="#">À propos</Link>
        <Link to="#">Journal</Link>
        <Link to="#">Support</Link>
        <div className="menuMobile__langSelector">
          <LangSelector />
        </div>
      </div>
    </nav>
  );
}
