import React from 'react';
import '../assets/styles/components/Footer.scss';
import classNames from 'classnames';

const Footer = ({ isHome }) => {
  const footerClassname = classNames('footer', { isHome });

  return (
    <footer className={footerClassname}>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
