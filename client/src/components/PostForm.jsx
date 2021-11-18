import React from "react";
import { useState } from "react";

export default function PostForm({makePost, user}){
    console.log(user)
    console.log(user.id)
    const [newPost, setNewPost] = useState({
        "user_id": 1,
        "title": "",
        "character_class": "",
        "likes": 0,
        "image": ""
    })

    function handleChange(e){
        setNewPost({ ...newPost, 
        [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(newPost)
        makePost(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
            </label>
            <input type="text" name="title" value={newPost.title} onChange={handleChange}/>
            <label>
                Character Class:
                <input type="text" name="character_class" value={newPost.character_class} onChange={handleChange}/>
            </label>
            <label>
                Image:
                <input type="text" name="image" value={newPost.image} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}