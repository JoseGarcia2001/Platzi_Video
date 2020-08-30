/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import TwitterIcon from '../assets/static/twitter-icon.png';
// import Header from '../components/Header';
// import Footer from '../components/Footer'

const Login = () => (

  <section className="login">
    <section className="login__container">
      <h2 tabIndex="0">Inicia sesión</h2>
      <form className="login__container--form">
        <input
          aria-label="correo"
          className="input"
          type="text"
          placeholder="Correo"
        />
        <input
          aria-label="contraseña"
          className="input"
          type="password"
          placeholder="Contraseña"
        />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input
              type="checkbox"
              name=""
              id="cbox1"
              value="checkbox"
            />
            Recuérdame
          </label>
          <a href="/">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Inicia sesión con Google
        </div>
        <div>
          <img src={TwitterIcon} alt="Twitter" />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta
        <a href="/">Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
