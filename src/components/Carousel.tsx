import React, { useEffect, useState } from 'react';

interface SlideProps {
  id: number;
  title: string;
  img: string;
}

interface CarouselProps {
  slides: SlideProps[];
}

export default function Carousel(props: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="carousel" aria-label="carousel">
      <a className="carousel__skip-link" href="#skip-link">
        Skip the Carousel
      </a>
      <div className="slides">
        {props.slides.map((slide) => (
          <div
            className={`slides-item slide-${slide.id}`}
            id={`slide-${slide.id}`}
            aria-label={`slide ${slide.id} of 3`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <h4>{slide.title}</h4>
          </div>
        ))}
      </div>
      <div className="carousel__nav">
        <a
          className="slider-nav"
          href={`#slide-${activeSlide === 1 ? activeSlide : activeSlide - 1}`}
          aria-label={`Go to slide ${activeSlide - 1}`}
          onClick={() => (activeSlide <= 1 ? 1 : setActiveSlide(activeSlide - 1))}
        >
          -
        </a>
        <a
          className="slider-nav"
          href={`#slide-${activeSlide + 1}`}
          aria-label={`Go to slide ${activeSlide + 1}`}
          onClick={() =>
            activeSlide < props.slides.length - 1
              ? setActiveSlide(activeSlide + 1)
              : props.slides.length
          }
        >
          +
        </a>
      </div>
      <div className="carousel__skip-message" id="skip-link" />
    </div>
  );
}
