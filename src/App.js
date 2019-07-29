import React from 'react';
import Posts from './components/Posts.js'
import './App.css'
import PostForm from './components/PostsForm.js'

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr></hr>
      <Posts />
    </div>
  );
}

export default App;
