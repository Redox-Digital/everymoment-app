import React from 'react';
import { Link } from 'react-router-dom';
import LangSelector from './LangSelector';

export default function Footer() {
  return (
    <footer>
      <div className="footer container-lg">
        <div className="footer__socials">
          <h4>Suivez-nous</h4>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <div className="footer__contactDetails">
            <i className="fa-solid fa-envelope-open" />
            <div className="footer__contactDetailsText">
              <h4>E-mail</h4>
              <a href="mailto:info@everymoment.ch">
                <span id="mail" />
              </a>
              <small>Nous répondons dans les 48h.</small>
            </div>
          </div>
          <div className="footer__contactDetails">
            <i className="fa-solid fa-phone-flip" />
            <div className="footer__contactDetailsText">
              <h4>Téléphone</h4>
              <a href="tel:+41790000000">
                <span id="phone" />
              </a>
              <small>Disponible en semaine, de 9h00 à 17h00.</small>
            </div>
          </div>
        </div>
        <div className="footer__support">
          <h4 className="d-none d-md-flex">Support</h4>
          <ul>
            <li>
              <Link to="contact">
                <h3>Contact</h3>
              </Link>
            </li>
            <li>
              <Link to="support#support__faq">
                <h3>FAQ</h3>
              </Link>
            </li>
            <li>
              <Link to="support#support__care">
                <h3>Entretien & réparations</h3>
              </Link>
            </li>
            <li>
              <Link to="support#support__conditions">
                <h3>Conditions générales</h3>
              </Link>
            </li>
            <li>
              <LangSelector />
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottomPayments">
            <img src="https://picsum.photos/73/25" alt="PayPal" />
            <img src="https://picsum.photos/73/25" alt="VISA" />
          </div>
          <small>Copyright Every Moment, 2022</small>
        </div>
      </div>
    </footer>
  );
}
