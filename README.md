# Blog Application

A responsive and dynamic blog application built using React.js, Material-UI (MUI) for styling, Redux for state management, and a rich text editor to allow users to create, edit, and manage blog posts. The application includes features like category filtering, dark mode toggle, and a clean, modern UI.

## Features

- **Create, Edit, and Delete Blog Posts**: Users can create, edit, and delete blog posts with a rich text editor.
- **Rich Text Editor**: Integrated editor for formatting and styling blog content.
- **Category Filtering**: Filter blogs by categories such as Technology, Travel, Food, and Lifestyle.
- **Dark Mode Toggle**: Switch between light and dark themes with a persistent setting.
- **Responsive Design**: Seamlessly adapts to different screen sizes for mobile, tablet, and desktop views.
- **Centralized State Management**: Efficiently manage state with Redux and Redux Thunk for asynchronous actions.

## Tech Stack

- **Frontend**: React.js, Material-UI (MUI)
- **State Management**: Redux, Redux Thunk
- **Routing**: React Router
- **Rich Text Editor**: React Quill

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbhinavKRN/blog-page.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

```
blog-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── BlogEditor.js
│   │   ├── BlogList.js
│   │   ├── BlogDetails.js
│   │   ├── CategorySidebar.js
│   │   ├── Navbar.js
│   │   └── ThemeSwitcher.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   └── CategoryPage.js
│   ├── redux/
│   │   ├── store.js
│   │   ├── actions.js
│   │   └── reducers.js
│   ├── App.js
│   ├── index.js
│   └── theme.js
├── .gitignore
├── package.json
└── README.md
```

## Key Components

- **`App.js`**: Main component that includes routing and theme management.
- **`BlogEditor.js`**: Component to create and edit blog posts with a rich text editor.
- **`BlogList.js`**: Displays a list of blogs using Material-UI Cards.
- **`BlogDetails.js`**: Displays full content of a selected blog post.
- **`CategorySidebar.js`**: Sidebar component for filtering blogs by category.
- **`Navbar.js`**: Navigation bar with links and dark mode toggle.
- **`ThemeSwitcher.js`**: Component to toggle between light and dark modes.

## Usage

- **Create a Blog**: Navigate to "Create Blog" from the navbar and fill in the blog details.
- **Edit a Blog**: Select a blog from the list and click "Edit".
- **Delete a Blog**: Select a blog from the list and click "Delete".
- **Filter by Category**: Use the sidebar to filter blogs by categories like Technology, Travel, etc.
- **Toggle Dark Mode**: Use the dark mode switcher in the navbar.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in the development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production to the `build` folder.
- **`npm run eject`**: Ejects the create-react-app configuration (not recommended).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.


## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Redux](https://redux.js.org/)
- [React Quill](https://github.com/zenoamaro/react-quill)

---

**Note:** For any issues or feature requests, please open an issue on the repository or contact the maintainers.
```