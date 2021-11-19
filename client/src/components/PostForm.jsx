import React from "react";
import { useState } from "react";
import {GiSwordWound} from 'react-icons/gi'

export default function PostForm({makePost, user}){
    const [newPost, setNewPost] = useState({
        "user_id": user.id,
        "title": "",
        "character_class": "",
        "likes": 0,
        "image": "",
        "favorite": false
    })

    const [showForm, setShowForm] = useState(false)
    

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
        <div> 
            <div className="form-button">
                <button onClick={() => setShowForm(!showForm)}>
                    <GiSwordWound />
                </button>
            </div>
            {showForm ? (
            <div className="post-form-container ">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input placeholder='Title' type="text" name="title" value={newPost.title} onChange={handleChange}/>
                    </div>
                    <div>
                        <input placeholder='Character Class' type="text" name="character_class" value={newPost.character_class} onChange={handleChange}/>
                    </div>
                    <div>
                        <input placeholder='Image' type="text" name="image" value={newPost.image} onChange={handleChange}/>
                    </div>
                    <input className='form-submit' type="submit" value="Submit"/>
                </form>
            </div>
            ): "" }
        </div>
    )
}