import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null)
  const [postData, setPostData] = useState([])
  const [reviewData, setReviewData] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() =>{
    fetch('/me')
    .then(r => {
      if(r.ok) {
        r.json().then(user =>  (user))
      }
    })
  },[])

  
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

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => setUserData(data))
  }, [])

  if(!user) return <Login onLogin={setUser}/>


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
    .then(updatedPost => {
      const updatedPostList = postData.map(post => {
        if(post.id === updatedPost.id){
          return updatedPost
        } else {
        return post
      }});
      setPostData(updatedPostList)
  })}


const handleDeletePost = id => {
  fetch(`posts/${id}`,{
    method : 'DELETE'
  })
  .then(() => {
    const deletePost = postData.filter(post => post.id !== id)
    setPostData(deletePost)
  })
}

console.log(user)
console.log(userData)

  


  


  return (
    <div>
      <Header user={user} setUser={setUser}/>
      <Home user={user} postData={postData} reviewData={reviewData} makePost={makePost} makeReview={makeReview} updateLikes={updateLikes}  setPostData={setPostData} handleDeletePost={handleDeletePost}/>
    </div>
  );
}

export default App;
