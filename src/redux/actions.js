export const ADD_BLOG = 'ADD_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const SET_THEME = 'SET_THEME';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const editBlog = (id, updatedBlog) => ({
  type: EDIT_BLOG,
  payload: { id, updatedBlog },
});

export const deleteBlog = (id) => ({
  type: DELETE_BLOG,
  payload: id,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});
