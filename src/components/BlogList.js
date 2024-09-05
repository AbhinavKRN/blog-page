import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <Grid container spacing={3}>
      {blogs.map((blog) => (
        <Grid item xs={12} sm={6} md={4} key={blog.id}>
          <Card>
            <CardActionArea component={Link} to={`/blog/${blog.id}`}>
              {blog.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={blog.image}
                  alt={blog.title}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
