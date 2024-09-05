import React from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogDetails from './components/BlogDetails';
import BlogEditor from './components/BlogEditor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getTheme from './theme';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const themeMode = useSelector((state) => state.blog.theme);
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="lg">
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/edit/:id" element={<BlogEditor />} />
            <Route path="/create" element={<BlogEditor />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
