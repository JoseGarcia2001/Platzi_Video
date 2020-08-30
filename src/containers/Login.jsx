import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

const Login = () => (
  <Header />

  <section className="login">
    <section className="login__container">
      <h2 tabindex="0">Inicia sesión</h2>
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
            />Recuérdame
          </label>
          <a href="">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src="../assets/google-icon.png" alt="Google" />
          Inicia sesión con Google
        </div>
        <div>
          <img src="../assets/twitter-icon.png" alt="Twitter" />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta <a href="">Regístrate</a>
      </p>
    </section>
  </section>

  <Footer />
);

export default Login;
