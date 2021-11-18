import React from "react";
import Reviews from "./Reviews";
import { useState } from "react";

export default function Posts({reviewData, title, image, likes, character_class, makeReview, id, updateLikes, user, handleDeletePost, username}){
    const [newReview, setNewReview] = useState({
        "user_id": user.id,
        "post_id": id,
        "rating": "",
        "comment": ""
    })
    const [liked, setLiked] = useState(false)
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
        <div>
            {console.log(reviewData.post_id)}
            <p>{title}</p>
            <p>{username}</p>
            <img src={image} alt={title}/>
            <button onClick={() => {
                addLikes()
                setLiked(!liked)
                }}>{liked ? "Dislike" : "Like"}</button>
                <button onClick={ () =>handleDeletePost(id)}>Delete Post</button>
            <p>{likes}</p>
            <p>{character_class}</p>
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
                <Reviews key={review.id} rating={review.rating} comment={review.comment} username={review.user.username}/>
            )}
        </div>
    )
}