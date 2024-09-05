import { ADD_BLOG, EDIT_BLOG, DELETE_BLOG, SET_THEME, FILTER_BY_CATEGORY } from './actions';

const initialState = {
  blogs: [],
  theme: 'light',
  selectedCategory: 'All',
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return { ...state, blogs: [...state.blogs, action.payload] };
    case EDIT_BLOG:
      return {
        ...state,
        blogs: state.blogs.map(blog =>
          blog.id === action.payload.id ? action.payload.updatedBlog : blog
        ),
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload),
      };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case FILTER_BY_CATEGORY:
      return { ...state, selectedCategory: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
