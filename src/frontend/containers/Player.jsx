/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.getVideoSource(id);
    setLoading(false);
  }, []);

  const hasPlaying = Object.keys(props.playing).length > 0;

  if (loading) {
    return <h2>Loading</h2>;
  };

  return hasPlaying ? (
    <div className='player'>
      <video controls autoPlay>
        <source
          src={props.playing.source}
          type='video/mp4'
        />
      </video>
      <div className='Player-back'>
        <button
          type='button'
          className='Player-backButton'
          onClick={() => {
            props.history.goBack();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : <Redirect to='/404' />;
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
