import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({postData, reviewData, makePost, makeReview, updateLikes}){
    return (
        <div>
            <PostForm makePost={makePost}/>
            <PostContainer postData={postData} reviewData={reviewData} makeReview={makeReview} updateLikes={updateLikes}/>
        </div>
    )
}