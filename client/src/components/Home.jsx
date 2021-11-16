import React from "react";
import PostContainer from "./PostContainer";
import PostForm from "./PostForm";

export default function Home({post, review}){
    return (
        <div>
            Home
            <PostForm/>
            <PostContainer post={post} review={review}/>
        </div>
    )
}