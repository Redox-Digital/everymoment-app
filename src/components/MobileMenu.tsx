import React from 'react';
import { Link } from 'react-router-dom';
import LangSelector from './LangSelector';

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu(props: MobileMenuProps) {
  return (
    <div className={`menuMobile menuMobile${props.isOpen ? '--open' : '--closed'}`}>
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
              <Link to="#">
                Vestes, Gilets <img src="https://picsum.photos/100/100" alt="" />
              </Link>
              <Link to="#">
                Couches intermédiaires <img src="https://picsum.photos/100/100" alt="" />
              </Link>
              <Link to="#">
                T-shirts, pulls <img src="https://picsum.photos/100/100" alt="" />
              </Link>
              <Link to="#">
                Pantalons <img src="https://picsum.photos/100/100" alt="" />
              </Link>
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
        <div className="menuMobile__lvl2">
          <details>
            <summary>
              <Link to="#">
                <h3>Sacs</h3>
              </Link>
            </summary>
          </details>
          <details>
            <summary>
              <Link to="#">
                <h3>Bonnets</h3>
              </Link>
            </summary>
          </details>
        </div>
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
  );
}
