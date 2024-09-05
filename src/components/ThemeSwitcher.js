import React from 'react';
import { FormControlLabel, Switch } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/actions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.blog.theme);

  const handleThemeChange = (event) => {
    dispatch(setTheme(event.target.checked ? 'dark' : 'light'));
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={theme === 'dark'}
          onChange={handleThemeChange}
          name="themeSwitcher"
          color="primary"
        />
      }
      label="Dark Mode"
    />
  );
};

export default ThemeSwitcher;
