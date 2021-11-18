import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";

export default function Profile({reviewData, title, image, likes, character_class, id, user, handleDeletePost, username, userId, handleDeleteReview, updateFavorite, postFavorite}){ 
    const [favoritePost, setFavoritePost] = useState(postFavorite)

    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='post-header'>
                    <h2>{title}</h2> 
                    <span><h2>{likes}</h2></span>
                </div>
                <span>posted by: <p>{username}</p> </span>
                <button onClick={() => {
                    updateFavorite(id, !favoritePost)
                    setFavoritePost(!favoritePost)
                }
                    }>{postFavorite ? "Unpin" : "Pin"}</button>
                <img src={image} alt={title}/>
                <div className="character-container">
                    <h3>{character_class}</h3>
                </div>
            </article>
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