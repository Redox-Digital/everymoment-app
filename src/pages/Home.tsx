import React from 'react';

export default function Home() {
  return (
    <main id="home">
      <section id="home__hero" className="hero">
        <h1>enjoy every moment of your life</h1>
        <h5>Découvrez nos derniers produits et collections</h5>
        <a className="btn btn--sm btn--secondary" href="#">
          Homme
        </a>
        <a className="btn btn--sm btn--secondary" href="#">
          Femme
        </a>
      </section>
      <section className="imgCategories container">
        <h3>Quel type de vêtements recherches-tu ?</h3>
        <div className="imgCard">
          <h4>Vestes, Gilets</h4>
        </div>
        <div className="imgCard">
          <h4>Couches intermédiaires</h4>
        </div>
        <div className="imgCard">
          <h4>Sous-vêtements techniques</h4>
        </div>
      </section>
      <section id="home__summary" className="container">
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
      <section id="home__collections" className="container">
        <div id="home__collectionsGallery" className="col-md-7 col-12">
          <div className="row">
            <a className="col-6" href="#">
              <img src="https://picsum.photos/300/300" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/300/300" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/300/300" alt="" />
            </a>
            <a className="col-6" href="#">
              <img src="https://picsum.photos/300/300" alt="" />
            </a>
          </div>
        </div>
        <div id="home__collectionsTexts" className="col-md-5 col-12">
          <h2>Collections</h2>
          <p>
            Lorem ipsum dolor sit amet. Ut consequatur doloremque vel assumenda aliquam ut ipsum
            eius est vitae aspernatur.
          </p>
        </div>
      </section>
      <section id="home__community" className="container">
        <h2>Communauté</h2>
        <article>
          <img src="https://picsum.photos/320/180" alt="" />
          <h6>25 janvier 2022</h6>
          <h4>BA Collection</h4>
          <a href="#">Lire l&lsquo;article</a>
        </article>
        <article>
          <img src="https://picsum.photos/320/180" alt="" />
          <h6>25 janvier 2022</h6>
          <h4>BA Collection</h4>
          <a href="#">Lire l&lsquo;article</a>
        </article>
        <article>
          <img src="https://picsum.photos/320/180" alt="" />
          <h6>25 janvier 2022</h6>
          <h4>BA Collection</h4>
          <a href="#">Lire l&lsquo;article</a>
        </article>
        <article>
          <img src="https://picsum.photos/320/180" alt="" />
          <h6>25 janvier 2022</h6>
          <h4>BA Collection</h4>
          <a href="#">Lire l&lsquo;article</a>
        </article>
      </section>
      <section id="home__faqCTA" className="container cta">
        <h3>FAQ</h3>
        <p>
          Lorem ipsum dolor sit amet. Eum voluptatem voluptatem et voluptas voluptates hic expedita
          dolor ut provident quas rem expedita perspiciatis!
        </p>
        <a href="#" className="btn btn-white">
          En savoir plus
        </a>
      </section>
      <section id="home__insta">
        <h2>Instagram</h2>
        {/* IG API */}
        <a href="#" className="btn btn--primary">
          Follow us on Instagram
        </a>
      </section>
    </main>
  );
}
