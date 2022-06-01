import React from 'react';
import ContactBlock from '../components/ContactBlock';
import SecondaryMenu from '../components/SecondaryMenu';

export default function Support() {
  return (
    <main id="support">
      <section className="hero">
        <h1>Que pouvons-nous faire pour toi ?</h1>{' '}
        <div className="hero__btns">
          <a className="btn btn--sm btn--secondary" href="#">
            Obtenir une assistance directe
          </a>
          <a className="btn btn--sm btn--secondary" href="#">
            FAQ
          </a>
          <a className="btn btn--sm btn--secondary" href="#">
            Entretien & réparations
          </a>
        </div>
      </section>
      <SecondaryMenu>
        <a href="#support__contact">Contact</a>
        <a href="#support_faq">FAQ</a>
        <a href="#support__care">Entretien & réparations</a>
        <a href="#support__conditions">Conditions générales</a>
      </SecondaryMenu>
      <section id="support__contact" className="container-md">
        <h3>Contact</h3>
        <p>
          Lorem ipsum dolor sit amet. Et culpa voluptatem et eaque voluptatum ut quisquam omnis ut
          dignissimos incidunt in consequatur accusantium sit internos accusantium.
        </p>
        <div className="contactBlocks">
          <ContactBlock
            icon="fa-envelope-open"
            title="E-mail"
            desc="Nous répondons dans les 48h."
          />

          <ContactBlock
            icon="fa-phone-flip"
            title="Téléphone"
            desc="Disponible en semaine, de 9h00 à 17h00."
          />
        </div>
      </section>
      <hr />
      <section id="support__faq">
        <h3>
          <abbr title="Foire aux questions">FAQ</abbr>
        </h3>
      </section>
    </main>
  );
}
