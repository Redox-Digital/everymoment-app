import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
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
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <div className="footer__contact--mail">
          <i className="fa-solid fa-envelope-open" />
          <h4>E-mail</h4>
          <a href="#">
            <span id="mail" />
          </a>
          <small>Nous répondons dans les 48h.</small>
        </div>
        <div className="footer__contact--phone">
          <i className="fa-solid fa-phone-flip" />
          <h4>Téléphone</h4>
          <a href="#">
            <span id="phone" />
          </a>
          <small>Disponible en semaine, de 9h00 à 17h00.</small>
        </div>
      </div>
      <div className="footer__support">
        <ul>
          <li>
            <a href="#">
              <h6>Texte</h6>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>Texte</h6>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>Texte</h6>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>Texte</h6>
            </a>
          </li>
          <li>
            <a href="#">
              <h6>Texte</h6>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <h6 className="light">Copyright Every Moment, 2022</h6>
      </div>
      <div className="footer__payments">
        <img src="https://picsum.photos/73/25" alt="" />
        <img src="https://picsum.photos/73/25" alt="" />
      </div>
    </footer>
  );
}
