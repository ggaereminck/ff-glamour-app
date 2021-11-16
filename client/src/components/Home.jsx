import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({post, review, makePost}){
    return (
        <div>
            Home
            <PostForm makePost={makePost}/>
            <PostContainer post={post} review={review}/>
        </div>
    )
}