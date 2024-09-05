import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog Application
        </Typography>
        <Button color="inherit" component={Link} to="/">
          <HomeIcon /> Home
        </Button>
        <Button color="inherit" component={Link} to="/create">
          <CreateIcon /> Create Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
