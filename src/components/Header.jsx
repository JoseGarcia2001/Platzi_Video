/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src="../../images/logo-platzi-video-BW2.png"
      alt="logo platzi video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../../images/user-icon.png" alt="Perfil" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="a">Cuenta</a>
        </li>
        <li>
          <a href="a">Cerrar Sesion</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
