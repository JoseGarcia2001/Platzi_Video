/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';
import Footer from '../components/Footer';

const Home = (props) => {
  const { myList, trends, originals } = props;
  return (
    <>
      <Header />
      <Search />

      {myList?.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList?.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales De Platzi Video">
        <Carousel>
          {originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Footer isHome />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
