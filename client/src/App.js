import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [postData, setPostData] = useState([])
  const [review, setReview] = useState([])
  // const [user, setUser] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then(res => res.json())
    .then(data => setReview(data))
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
 
  return (
    <div>
      <Header/>
      <Home postData={postData} review={review} makePost={makePost}/>
    </div>
  );
}

export default App;
