/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((response) => setVideo(response));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />

      {videos.mylist?.length && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={videos.id} {...item} />
          ))}
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales De Platzi Video">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
