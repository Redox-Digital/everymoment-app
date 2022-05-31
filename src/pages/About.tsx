import React from 'react';
import { Link } from 'react-router-dom';
import SecondaryMenu from '../components/SecondaryMenu';

export default function About() {
  return (
    <main id="about">
      <section id="about__hero" className="hero">
        <h1>À propos</h1>
        <h5>At omnis eligendi est explicabo nostrum eos sequi omnis non earum deserunt.</h5>
      </section>
      <SecondaryMenu />
      <section id="about__history" className="container-md">
        <h2>Histoire</h2>
        <p>
          Lorem ipsum dolor sit amet. Est nihil velit et officiis quaerat est animi voluptate rem
          sequi blanditiis vel velit dicta eum eligendi velit.
        </p>
        <p>
          Id atque voluptatibus aut error distinctio eum iste corrupti sed galisum debitis et
          nesciunt molestias ut eaque labore sit incidunt dolores.
        </p>
        <img src="https://picsum.photos/400/500" alt="" />
        <Link to="#" className="btn btn--primary">
          En savoir plus
        </Link>
      </section>
      <section id="about__eco" className="container-md">
        <h2>Eco</h2>
        <p>
          Lorem ipsum dolor sit amet. Est nihil velit et officiis quaerat est animi voluptate rem
          sequi blanditiis vel velit dicta eum eligendi velit.
        </p>
        <p>
          Id atque voluptatibus aut error distinctio eum iste corrupti sed galisum debitis et
          nesciunt molestias ut eaque labore sit incidunt dolores.
        </p>
        <img src="https://picsum.photos/400/500" alt="" />
        <Link to="#" className="btn btn--primary">
          En savoir plus
        </Link>
      </section>
      <section id="about__ethics" className="container-md">
        <h2>Ethique</h2>
        <p>
          Lorem ipsum dolor sit amet. Est nihil velit et officiis quaerat est animi voluptate rem
          sequi blanditiis vel velit dicta eum eligendi velit.
        </p>
        <p>
          Id atque voluptatibus aut error distinctio eum iste corrupti sed galisum debitis et
          nesciunt molestias ut eaque labore sit incidunt dolores.
        </p>
        <img src="https://picsum.photos/400/500" alt="" />
        <Link to="#" className="btn btn--primary">
          En savoir plus
        </Link>
      </section>
      <hr />
      <section id="about__lastCollections" className="container-md">
        <h2>Dernières collections</h2>
      </section>
    </main>
  );
}
