import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import iconPlay from '../assets/static/icons8-play-64.png';
import iconPlus from '../assets/static/icons8-más-64.png';

const CarouselItem = (props) => {
  const { title, cover, year, duration, contentRating } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      title, cover, year, duration, contentRating,
    });
  };

  return (
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
            onClick={handleSetFavorite}
          />
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  duration: PropTypes.number,
  contentRating: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
