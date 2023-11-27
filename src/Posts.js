import React from 'react'
import './Posts.css';
import Post from './components/Post';

function Posts() {
  return (
    <div>
    <div className='App-header'>
        <h1>Posts</h1>
    </div>

        <div className='post-container'>
            <Post />
        </div>
    </div>
  )
}

export default Posts