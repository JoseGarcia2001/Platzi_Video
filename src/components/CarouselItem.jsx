import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className="carousel-item">
    <img
      className="carousel-item__img"
      src="https://images.pexels.com/photos/2951142/pexels-photo-2951142.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      alt="people"
    />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details-img"
          src="../assets/icons8-play-64.png"
          alt="Play"
        />
        <img
          className="carousel-item__details-img"
          src="../assets/icons8-más-64.png"
          alt="Más"
        />
        <p className="carousel-item__details--title">Título descriptivo</p>
        <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
      </div>
    </div>
  </div>
);

export default CarouselItem;
