import React from "react";
import Posts from "./Posts";

export default function PostContainer({postData, reviewData, makeReview, updateLikes, user, setPostData, handleDeletePost, handleDeleteReview}){
    return (
        <div>
            {postData.map(post => 
                <Posts key={post.id} user={user} title={post.title}  image={post.image} likes={post.likes} character_class={post.character_class} reviewData={reviewData} makeReview={makeReview} id={post.id} updateLikes={updateLikes} postData={postData} setPostData={setPostData} handleDeletePost={handleDeletePost} username={post.user.username} userId={post.user.id} handleDeleteReview={handleDeleteReview}/>
            )}
        </div>
    )
}