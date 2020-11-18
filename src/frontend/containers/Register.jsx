/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { registerUser } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({});
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <>
      <Header isLogin />
      <section className='register'>
        <div className='register__container'>
          <h2 tabIndex='0'>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              autoComplete='off'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              autoComplete='off'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              autoComplete='off'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>
              Registrarme
            </button>
          </form>
          <p>
            <Link to='/login'>Iniciar Sesion</Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
