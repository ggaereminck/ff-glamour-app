import React from "react";
import Posts from "./Posts";

export default function PostContainer({post, review}){
    return (
        <div>
            PostContainer
            {post.map(post => 
                <Posts key={post.id} title={post.title} image={post.image} likes={post.likes} character_class={post.character_class} review={review} />
            )}
        </div>
    )
}