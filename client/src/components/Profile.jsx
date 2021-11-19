import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";
import { BsFillPinAngleFill, BsFillPinFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'

export default function Profile({reviewData, title, image, likes, character_class, id, user, handleDeletePost, userId, handleDeleteReview, updateFavorite, postFavorite}){ 
    const [favoritePost, setFavoritePost] = useState(postFavorite)
    return (
        <div className='post-div'>
            <article className='single-post'>
                <div className='post-header'>
                    <h2>{title.toUpperCase()}</h2> 
                    <span><h2>{likes}</h2></span>
                </div>
                <div className='pin-div'>
                <button onClick={() => {
                    updateFavorite(id, !favoritePost)
                    setFavoritePost(!favoritePost)
                }
                    }>{postFavorite ? <BsFillPinAngleFill /> : <BsFillPinFill />}</button>
                </div>
                <img src={image} alt={title}/>
                <div className="character-container">
                    <h3>{character_class}</h3>
                </div>
            </article>
            <div className='post-review-del-container'>
                    {user.id === userId ? 
                    <button onClick={ () =>handleDeletePost(id)}><AiFillDelete/></button> : ""}
            </div>
            <div className='reviews-'>
            {reviewData.filter((a) => a.post_id === id).map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment} username={review.user.username} handleDeleteReview={handleDeleteReview} user={user} userId={review.user.id} id={review.id}/>
            )}
            </div>   
        </div>                 

    )
}