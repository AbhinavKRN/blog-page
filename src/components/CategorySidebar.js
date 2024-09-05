import React from 'react';
import { List, ListItem, ListItemText, Typography, Box, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/actions';

const categories = ['All', 'Technology', 'Travel', 'Food', 'Lifestyle'];

const CategorySidebar = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 1,
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 1 }}>
        Categories
      </Typography>
      <Divider />
      <List>
        {categories.map((category) => (
          <ListItem
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            }}
          >
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategorySidebar;
