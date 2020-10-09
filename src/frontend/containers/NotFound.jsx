import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/NotFound.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => (
  <>
    <Header isLogin />
    <div className='info__container'>
      <h1 className='info__container--important'>404</h1>
      <p className='info__container--message'>página no encontrada</p>
    </div>
    <Footer />
  </>
);

export default NotFound;
