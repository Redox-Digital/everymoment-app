import React from 'react';

export default function MainMenu() {
  /* Animation Burger  : https://codepen.io/elitsa_dimitrova/pen/LJWBVo  */
  return (
    <nav>
      <div className="menu">
        <div className="menuBurger">
          <a href="#">
            <span className="burger" />
            <span className="burger" />
            <span className="burger" />
            <span className="iconLabel">Menu</span>
          </a>
        </div>
        <div className="menuLeft">
          <a href="#">Vêtements</a>
          <a href="#">Accessoires</a>
        </div>
        <div className="menuMid">
          <img src="https://picsum.photos/400/42" alt="Every Moment" />
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
    </nav>
  );
}
