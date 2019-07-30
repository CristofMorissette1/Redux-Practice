import React from 'react';
import Posts from './components/Posts.js';
import './App.css';
import PostForm from './components/PostsForm.js';
import { Provider } from 'react-redux'; 
import Store from './store'



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm />
      <hr></hr>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
