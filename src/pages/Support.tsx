import React from 'react';

import ContactBlock from '../components/ContactBlock';
import AccordionGroup from '../components/AccordionGroup';
import SecondaryMenu from '../components/SecondaryMenu';

export default function Support() {
  // Static data for dev purpose
  const accordions = [
    {
      title: 'Commande & Envoi',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Retour',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Paiement',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Thème 4',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Thème 5',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
  ];

  const conditions = [
    {
      title: 'Condition 1',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Condition 2',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Condition 3',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Condition 4',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
    {
      title: 'Condition 5',
      desc: 'Lorem ipsum dolor sit amet. Ea saepe velit aut galisum distinctio qui Quis velit et architecto voluptatem est aliquid rerum quo ullam exercitationem et magni esse. ',
    },
  ];

  return (
    <main id="support">
      <section className="hero">
        <h1>Que pouvons-nous faire pour toi ?</h1>{' '}
        <div className="hero__btns">
          <a className="btn btn--sm btn--secondary" href="#support__contact">
            Obtenir une assistance directe
          </a>
          <a className="btn btn--sm btn--secondary" href="#support__faq">
            FAQ
          </a>
          <a className="btn btn--sm btn--secondary" href="#support__care">
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
        <AccordionGroup elements={accordions} />
      </section>
      <section id="support__care">
        <h2>Entretien & réparations</h2>
      </section>
      <section id="support__conditions">
        <h3>Conditions générales</h3>
        <AccordionGroup elements={conditions} />
      </section>
    </main>
  );
}
