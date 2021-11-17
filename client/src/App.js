import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [postData, setPostData] = useState([])
  const [reviewData, setReviewData] = useState([])
  // const [user, setUser] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then(res => res.json())
    .then(data => setReviewData(data))
  }, [])

  const makePost = post => {
    fetch('/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => {
      setPostData([
        post, ...postData
      ])
    })
  } 

  const makeReview = review => {
    fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(review => {
      setReviewData([
        review, ...reviewData
      ])
    })
  } 

  const updateLikes = (id, newLikes) => {
    console.log(id, newLikes)
    fetch(`/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({likes: newLikes })
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }
 
  return (
    <div>
      <Header/>
      <Home postData={postData} reviewData={reviewData} makePost={makePost} makeReview={makeReview} updateLikes={updateLikes}/>
    </div>
  );
}

export default App;
