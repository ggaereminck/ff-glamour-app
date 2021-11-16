import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({postData, review, makePost}){
    return (
        <div>
            Home
            <PostForm makePost={makePost}/>
            <PostContainer postData={postData} review={review}/>
        </div>
    )
}