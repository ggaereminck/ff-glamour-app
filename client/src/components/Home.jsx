import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({postData, reviewData, makePost, makeReview, updateLikes, user, setPostData, handleDeletePost}){
    return (
        <div>
            <PostForm user={user} makePost={makePost}/>
            <PostContainer postData={postData} reviewData={reviewData} makeReview={makeReview} updateLikes={updateLikes} setPostData={setPostData} handleDeletePost={handleDeletePost} user={user}/>
        </div>
    )
}