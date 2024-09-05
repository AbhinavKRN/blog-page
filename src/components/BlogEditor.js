import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, editBlog } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, MenuItem } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const categories = ['Technology', 'Travel', 'Food', 'Lifestyle'];

const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blogs.find((b) => b.id === id));

  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');
  const [category, setCategory] = useState(blog ? blog.category : '');
  const [author, setAuthor] = useState(blog ? blog.author : '');
  const [date, setDate] = useState(blog ? blog.date : new Date().toISOString().slice(0, 10));

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
      setCategory(blog.category);
      setAuthor(blog.author);
      setDate(blog.date);
    }
  }, [blog]);

  const handleSave = () => {
    const newBlog = { id: id || Date.now().toString(), title, content, category, author, date };
    if (id) {
      dispatch(editBlog(id, newBlog));
    } else {
      dispatch(addBlog(newBlog));
    }
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">{id ? 'Edit Blog' : 'Create Blog'}</Typography>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Author"
        fullWidth
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Category"
        select
        fullWidth
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        margin="normal"
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Date"
        type="date"
        fullWidth
        value={date}
        onChange={(e) => setDate(e.target.value)}
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <ReactQuill value={content} onChange={setContent} />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Container>
  );
};

export default BlogEditor;
