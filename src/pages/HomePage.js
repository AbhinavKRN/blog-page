import React from 'react';
import { useSelector } from 'react-redux';
import BlogList from '../components/BlogList';
import CategorySidebar from '../components/CategorySidebar';
import { Grid, Typography, Container } from '@mui/material';

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const selectedCategory = useSelector((state) => state.blog.selectedCategory);

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <CategorySidebar />
        </Grid>

        <Grid item xs={12} md={9}>
          {filteredBlogs.length > 0 ? (
            <BlogList blogs={filteredBlogs} />
          ) : (
            <Typography variant="h6" color="textSecondary">
              No blogs found in this category.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
