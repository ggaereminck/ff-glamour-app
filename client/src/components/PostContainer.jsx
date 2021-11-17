import React from "react";
import Posts from "./Posts";

export default function PostContainer({postData, reviewData, makeReview, updateLikes}){
    return (
        <div>
            {postData.map(post => 
                <Posts key={post.id} title={post.title} image={post.image} likes={post.likes} character_class={post.character_class} reviewData={reviewData} makeReview={makeReview} id={post.id} updateLikes={updateLikes}/>
            )}
        </div>
    )
}