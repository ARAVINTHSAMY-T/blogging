import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
