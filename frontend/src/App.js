import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import CreatePostAI from './components/CreatePostAI';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/postdetail/:id" element={<PostDetail />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/createpostAI" element={<CreatePostAI />} />
            </Routes>
          </div>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;