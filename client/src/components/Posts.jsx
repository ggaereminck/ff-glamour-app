import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";

export default function Posts({reviewData, title, image, likes, character_class, makeReview, id}){
    const [newReview, setNewReview] = useState({
        "user_id": 1,
        "post_id": id,
        "rating": "",
        "comment": ""
    })

    function handleChange(e){
        setNewReview({ ...newReview, 
        [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        makeReview(newReview)
    }

    return (
        <div>
            <p>{title}</p>
            <img src={image} alt={title}/>
            <p>{likes}</p>
            <p>{character_class}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                </label>
                <input type="text" name="rating" value={newReview.rating} onChange={handleChange}/>
                <label>
                    Comment:
                    <textarea type="text" name="comment" value={newReview.comment} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {reviewData.map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment}/>
            )}
        </div>
    )
}