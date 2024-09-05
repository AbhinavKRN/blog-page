import React from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/BlogList';

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Category: {category}</h1>
      <BlogList category={category} />
    </div>
  );
};

export default CategoryPage;