import React from "react";
import Reviews from "./Reviews";

export default function Posts({review, title, image, likes, character_class}){
    return (
        <div>
            <p>{title}</p>
            <img src={image} alt={title}/>
            <p>{likes}</p>
            <p>{character_class}</p>
            {review.map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment}/>
            )}
        </div>
    )
}