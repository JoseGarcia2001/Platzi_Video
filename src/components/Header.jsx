/* eslint-disable jsx-quotes */
import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img
      className="header__img"
      src={logo}
      alt="logo platzi video"
    />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="Perfil" />
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
