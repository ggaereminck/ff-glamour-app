import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState([])
  const [review, setReview] = useState([])
  // const [user, setUser] = useState([])

  useEffect(() => {
    fetch("/posts")
    .then(res => res.json())
    .then(data => setPost(data))
  }, [])

  useEffect(() => {
    fetch("/reviews")
    .then(res => res.json())
    .then(data => setReview(data))
  }, [])

  function makePost(newPost){
    fetch("/posts", {
    method: "POST",
    headers: {"Content-Type" : "application/json"}
    ,
    body: JSON.stringify({newPost}), 
  })
    .then(res => res.json())
    .then(data => setPost([...post, data]))
  }
 
  

  return (
    <div>
      <Header/>
      <Home post={post} review={review} makePost={makePost}/>
    </div>
  );
}

export default App;
