import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";

export default function Posts({reviewData, title, image, likes, character_class, makeReview, id, updateLikes}){
    const [newReview, setNewReview] = useState({
        "user_id": 1,
        "post_id": id,
        "rating": "",
        "comment": ""
    })
    const [liked, setLiked] = useState(false)
    const [newLikes, setNewLikes] = useState(likes)
    const [toggleForm, setToggleForm] = useState(true)

    function handleChange(e){
        setNewReview({ ...newReview, 
        [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        makeReview(newReview)
    }

    function addLikes(){
        if (liked === true){
            setNewLikes(newLikes => newLikes-=1)
            updateLikes(id, newLikes)
        }else
            setNewLikes(newLikes => newLikes+=1)
            updateLikes(id, newLikes)
    }

    return (
        <div>
            <p>{title}</p>
            <img src={image} alt={title}/>
            <button onClick={() => {
                setLiked(!liked)
                addLikes()
                }}>{liked ? "Dislike" : "Like"}</button>
            <p>{newLikes}</p>
            <p>{character_class}</p>
            <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Hide Form" : "Add Review"}</button>
            {toggleForm ? <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                </label>
                <input type="text" name="rating" value={newReview.rating} onChange={handleChange}/>
                <label>
                    Comment:
                    <textarea type="text" name="comment" value={newReview.comment} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form> : ""}
            {reviewData.map(review => 
                <Reviews key={review.id} rating={review.rating} comment={review.comment}/>
            )}
        </div>
    )
}