/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className="register">
    <div className="register__container">
      <h2 tabIndex="0">Regístrate</h2>
      <form className="register__container--form">
        <input className="input" type="text" placeholder="Nombre" />
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <p><a href="/">Iniciar sesion</a></p>
    </div>
  </section>
);

export default Register;
