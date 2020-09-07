import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import iconPlay from '../assets/static/icons8-play-64.png';
import iconPlus from '../assets/static/icons8-más-64.png';
import removeIcon from '../assets/static/remove-icon.png';
import checkIcon from '../assets/static/icons8-marca-de-verificación-64.png';

const CarouselItem = (props) => {
  const { id, title, cover, year, duration, contentRating, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite({
      id, title, cover, year, duration, contentRating,
    });
    document.getElementById('icon-plus').src = checkIcon;
  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details-img"
            src={iconPlay}
            alt="Play"
          />

          {isList ? (
            <img
              className="carousel-item__details-img"
              src={removeIcon}
              alt="Remove"
              onClick={handleDeleteFavorite}
            />
          ) : (
            <img
              className="carousel-item__details-img"
              id="icon-plus"
              src={iconPlus}
              alt="Más"
              onClick={handleSetFavorite}
            />
          )}

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
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
