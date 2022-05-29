import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
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
            <h4>E-mail</h4>
            <a href="mailto:info@everymoment.ch">
              <span id="mail" />
            </a>
            <small>Nous répondons dans les 48h.</small>
          </div>
          <div className="footer__contactDetails">
            <i className="fa-solid fa-phone-flip" />
            <h4>Téléphone</h4>
            <a href="tel:+41790000000">
              <span id="phone" />
            </a>
            <small>Disponible en semaine, de 9h00 à 17h00.</small>
          </div>
        </div>
        <div className="footer__support">
          <ul>
            <li>
              <a href="#">
                <h3>Contact</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>FAQ</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Entretien & réparations</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <h3>Conditions générales</h3>
              </a>
            </li>
            <li>
              <span className="footer__langSelector">
                <i className="fa-solid fa-earth-europe" />
                Choisis ta langue :
                <select>
                  <option selected value="FR">
                    FR
                  </option>
                  <option value="EN">EN</option>
                  <option value="DE">DE</option>
                </select>
              </span>
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
