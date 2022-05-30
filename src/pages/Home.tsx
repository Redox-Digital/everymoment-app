import React from 'react';
import ArticlePreview from '../components/ArticlePreview';
import Carousel from '../components/Carousel';

export default function Home() {
  const randomDate = (start: Date, end: Date) =>
    new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  // Static values
  const slides = [
    { id: 1, title: 'Vestes, Gilets', img: 'https://picsum.photos/290/290' },
    { id: 2, title: 'Couches intermédiaires', img: 'https://picsum.photos/300/300' },
    { id: 3, title: 'Sous-vêtements techniques', img: 'https://picsum.photos/295/295' },
  ];

  return (
    <main id="home">
      <section id="home__hero" className="hero">
        <h1>enjoy every moment of your life</h1>
        <h5>Découvrez nos derniers produits et collections</h5>
        <div className="hero__btns">
          <a className="btn btn--sm btn--secondary" href="#">
            Homme
          </a>
          <a className="btn btn--sm btn--secondary" href="#">
            Femme
          </a>
        </div>
      </section>
      <section className="imgCategories container-md">
        <h3>Quel type de vêtements recherches&#8209;tu&nbsp;?</h3>
        <Carousel slides={slides} />
      </section>
      <section id="home__summary" className="container-md">
        <div className="row">
          <div className="col-md-6 col-12">
            <h2>Résumé</h2>
            <p>
              Lorem ipsum dolor sit amet. Est nihil velit et officiis quaerat est animi voluptate
              rem sequi blanditiis vel velit dicta eum eligendi velit.
            </p>
            <p>
              Id atque voluptatibus aut error distinctio eum iste corrupti sed galisum debitis et
              nesciunt molestias ut eaque labore sit incidunt dolores.
            </p>
            <a href="#" className="btn btn--primary">
              En savoir plus
            </a>
          </div>
          <div className="col-md-6 col-12 fullImgContainer">
            <img src="https://picsum.photos/400/515" alt="" />
          </div>
        </div>
      </section>
      <section id="home__collections" className="container-md">
        <div id="home__collectionsGallery" className="col-md-6 col-12">
          <div className="row">
            <a className="col-6" href="#">
              <img src="https://picsum.photos/298/298" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/300/300" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/290/290" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/295/295" alt="" />
            </a>
          </div>
        </div>
        <div className="col-0 col-md-1">{/* spacer */}</div>
        <div id="home__collectionsTexts" className="col-md-5 col-12">
          <h2>Collections</h2>
          <p>
            Lorem ipsum dolor sit amet. Ut consequatur doloremque vel assumenda aliquam ut ipsum
            eius est vitae aspernatur.
          </p>
        </div>
      </section>
      <section id="home__community" className="container-md">
        <h2>Communauté</h2>
        {/* FUTURE COMPONENT, avec onClick */}
        {[...Array(5)].map((i) => (
          <ArticlePreview
            key={i}
            date={randomDate(new Date(2016, 10, 1), new Date())}
            title="BA Collection"
            img="https://picsum.photos/320/180"
            link="#"
          />
        ))}
      </section>
      <section id="home__FAQ" className="cta">
        <h3>FAQ</h3>
        <p>
          Lorem ipsum dolor sit amet. Eum voluptatem voluptatem et voluptas voluptates hic expedita
          dolor ut provident quas rem expedita perspiciatis!
        </p>
        <a href="#" className="btn btn--secondary">
          En savoir plus
        </a>
      </section>
      <section id="home__insta" className="d-none">
        <h2>Instagram</h2>
        {/* IG API */}
        {/* https://nocodeapi.com/instagram-api */}
        <a href="#" className="btn btn--primary">
          Follow us on Instagram
        </a>
      </section>
    </main>
  );
}
