import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import iconPlay from '../assets/static/icons8-play-64.png';
import iconPlus from '../assets/static/icons8-más-64.png';

const CarouselItem = ({ title, cover, year, duration, contentRating }) => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src={cover}
      alt={title}
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details-img"
          src={iconPlay}
          alt="Play"
        />
        <img
          className="carousel-item__details-img"
          src={iconPlus}
          alt="Más"
        />
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  </div>
);

export default CarouselItem;
