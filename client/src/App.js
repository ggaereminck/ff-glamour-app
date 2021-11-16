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
 
  return (
    <div>
      <Header/>
      <Home postData={postData} reviewData={reviewData} makePost={makePost} makeReview={makeReview}/>
    </div>
  );
}

export default App;
