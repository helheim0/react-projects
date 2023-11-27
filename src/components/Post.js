import React, { useEffect, useState } from 'react'
import './Post.css';

function Post() {
    const [posts, setPosts] = useState([]);
    const [comments, setComment] = useState([]);
        
    useEffect(() => {
        const postUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10";
        const commentUrl = "https://jsonplaceholder.typicode.com/comments";

        const fetchPosts =  async() => {
            try {
                const response = await fetch(postUrl);
                const postData = await response.json();
                setPosts(postData);
            }
            catch(err) {
                console.log(err.message);
            }
        }

        const fetchComments = async(id) => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
                const commentData = await response.json();
                setComment(commentData);
            }
            catch {

            }
        }

        fetchPosts();
        fetchComments();
    },[]);

  return (
    <div>
        <h1>Hello from POST</h1>
        {posts.map(post => (
            <div>
        <div className='post-card' key={post.id}>
            <div className='card-title-section'>
                <h3 className='card-title'>{post.title}</h3>
                <h6 className='user-name'>Written by: User {post.userId}</h6>
            </div>
            <div className='card-body-section'>
                 <p className='card-body'>{post.body}</p>
            </div></div></div>))}
            
                <div>
                    
            <h4>Comments:</h4>
            <div className='comment-section'>
            <div className='comment-title-section'>
                <h3 className='comment-name'>gghh</h3>
                <h6 className='comment-email'>ggg</h6>
            </div>
            <div className='comment-body-section'>
                 <p className='comment-body'>hhhh</p>
            </div>
            </div>
            </div>
         <hr></hr>
    </div>
  )
}

export default Post