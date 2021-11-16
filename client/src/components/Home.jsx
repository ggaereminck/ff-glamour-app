import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({postData, reviewData, makePost, makeReview}){
    return (
        <div>
            Home
            <PostForm makePost={makePost}/>
            <PostContainer postData={postData} reviewData={reviewData} makeReview={makeReview}/>
        </div>
    )
}