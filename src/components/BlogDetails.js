import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blog.blogs.find((b) => b.id === id));

  if (!blog) return <Typography variant="h6">Blog not found</Typography>;

  return (
    <Container>
      <Typography variant="h4">{blog.title}</Typography>
      <Typography variant="subtitle1">{`By ${blog.author} on ${new Date(blog.date).toLocaleDateString()}`}</Typography>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </Container>
  );
};

export default BlogDetails;
