/* eslint-disable jsx-quotes */
import React from 'react';
import { connect } from 'react-redux';
import { searchingVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const handleSearch = (event) => {
    props.searchingVideo(event.target.value);
  };

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        className="input_search"
        type="text"
        placeholder="Buscar..."
        onChange={handleSearch}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchingVideo,
};

export default connect(null, mapDispatchToProps)(Search);
