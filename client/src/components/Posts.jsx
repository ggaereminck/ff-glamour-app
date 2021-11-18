import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";
import {GiBroadsword, GiAncientSword} from 'react-icons/gi'

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

    // function handleDeletePost(id){
    //     fetch(`/posts/${id}`, {
    //         method: 'DELETE',
    // }).then((r) => r.json())
    //     .then (() => {
    //         const filteredPost = postData.filter(pData => pData.id !== postData.id)
    //         setPostData(filteredPost)
    //     });
    // }


            
     

    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='post-header'>
                    <h2>{title}</h2> 
                    <span><h2>{likes}</h2></span>
                </div>
                <span>posted by: <p>{username}</p> </span>
                <img src={image} alt={title}/>
                <div className='post-like-del-container'>
                    <div className='likes'>
                    
                    <button onClick={() => {
                        addLikes()
                        setLiked(!liked)
                        }}>{liked ? <GiAncientSword /> : <GiBroadsword />}</button>
                    </div>                
                </div>
                <div className="character-container">
                    <h3>{character_class}</h3>
                </div>
            </article>
            <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Hide Form" : "Add Review"}</button>
            {toggleForm ? <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                </label>
                <input type="number"  min="0" max="5" step="1" name="rating" value={newReview.rating} onChange={handleChange}/>
                <label>
                    Comment:
                    <textarea type="text" name="comment" value={newReview.comment} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form> : ""}
            {reviewData.filter((a) => a.post_id === id).map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment} username={review.user.username} handleDeleteReview={handleDeleteReview} user={user} userId={review.user.id} id={review.id}/>
            )}
            <div>
                {user.id === userId ? 
                <button onClick={ () =>handleDeletePost(id)}>Delete Post</button> : ""}
            </div>
        </div>
    )
}