import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";
import {BiUpvote, BiDownvote, BiCommentDots, BiCommentX} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

export default function Posts({reviewData, title, image, likes, character_class, makeReview, id, updateLikes, user, handleDeletePost, username, userId, handleDeleteReview}){
    const [newReview, setNewReview] = useState({
        "user_id": user.id,
        "post_id": id,
        "rating": "",
        "comment": ""
    })
    const [liked, setLiked] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)

    function handleChange(e){
        setNewReview({ ...newReview, 
        [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        makeReview(newReview)
    }

    function addLikes(){
        const oppLike = !liked
        if (oppLike === true){
            updateLikes(id, likes + 1)
        }else{
            updateLikes(id, likes-1)
    }}
     
    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='post-header'>
                    <h2>{title.toUpperCase()}</h2> 
                    <span><h2>{likes}</h2></span>
                </div>
                <div className='post-user'>
                    <p>Post By: {username.toUpperCase()}</p>
                    <div className='likes'>  
                    <button onClick={() => {
                        addLikes()
                        setLiked(!liked)
                        }}>{liked ? <BiDownvote/> : <BiUpvote/>}</button>
                    </div>   
                </div>
                <img src={image} alt={title}/>
                <div className="character-container">
                    <h2>{character_class.toUpperCase()} CLASS</h2>
                </div>    
            </article>
            <div className='post-review-del-container'>
                    <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? <BiCommentX /> : <BiCommentDots />}
                    </button>
                    {user.id === userId ? 
                    <button onClick={ () =>handleDeletePost(id)}><AiFillDelete/></button> : ""}
            </div>
            <div className="review-form">
                {toggleForm ? 
                <form onSubmit={handleSubmit}>
                        <textarea type="text" name="comment" placeholder='Leave A Review' value={newReview.comment} onChange={handleChange}
                        />
                          <input className='rating' type="number" placeholder="0 / 5"  min="0" max="5" step="1" name="rating" value={newReview.rating} onChange={handleChange}/>
                    <input className='review-submit' type="submit" value="Submit"/>
                </form> : ""}
            </div>
            <div className='reviews-box'>
            {reviewData.filter((a) => a.post_id === id).map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment} username={review.user.username} handleDeleteReview={handleDeleteReview} user={user} userId={review.user.id} id={review.id}/>
            )}
            </div>
        </div>
    )
}