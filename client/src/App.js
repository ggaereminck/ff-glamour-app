import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import {Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Profile from './components/Profile';




function App() {
  const [user, setUser] = useState(null)
  const [postData, setPostData] = useState([])
  const [reviewData, setReviewData] = useState([])



  useEffect(() =>{  
    fetch('/me', {
      credentials: 'include'
    })
    .then(r => {
    
      if(r.ok) {
        r.json().then(user =>  setUser(user)) 
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
        ...postData, post
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
        ...reviewData, review
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

  const updateFavorite = (id, newFavorite) => {
    fetch(`/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({favorite: newFavorite })
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

const handleDeleteReview = id => {
  fetch(`reviews/${id}`,{
    method : 'DELETE'
  })
  .then(() => {
    const deleteReview = reviewData.filter(review => review.id !== id)
    setReviewData(deleteReview)
  })
}
  return (
    <div>

        <Header user={user} setUser={setUser}/>
        {/* <NavBar /> */}
        <Switch> 
        <Route path="/Profile">
        {postData.filter(post => post.user.id === user.id).sort((a, b) =>
          b.favorite - a.favorite).map(post => 
                <Profile key={post.id} user={user} title={post.title}  image={post.image} likes={post.likes} character_class={post.character_class} reviewData={reviewData} id={post.id} handleDeletePost={handleDeletePost} username={post.user.username} userId={post.user.id} handleDeleteReview={handleDeleteReview} updateFavorite={updateFavorite} postFavorite={post.favorite}/>
            )}
        </Route>
        <Route path="/">
          <Home user={user} postData={postData} reviewData={reviewData} makePost={makePost} makeReview={makeReview} updateLikes={updateLikes}  setPostData={setPostData} handleDeletePost={handleDeletePost} handleDeleteReview={handleDeleteReview}/>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
