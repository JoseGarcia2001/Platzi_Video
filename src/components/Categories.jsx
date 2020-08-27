import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div className="Categories">
    <h2 className="categories__title">Mi lista</h2>
    {children}
  </div>
);

export default Categories;
