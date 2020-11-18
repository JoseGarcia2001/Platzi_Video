import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  //Lo primero será probar que exista el componente

  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer haves anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  test('Footer Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
