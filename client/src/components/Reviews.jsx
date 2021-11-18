import React from "react";

export default function Reviews({rating, comment, username, user, userId, handleDeleteReview, id}){
    return (
        <div>
            <p>{username}</p>
            <p>{`${rating}/5`}</p>
            <p>{`Comment: ${comment}`}</p>
            {user.id === userId ? <button onClick={ () => handleDeleteReview(id)}>Delete Review</button> : ""}
        </div>
    )
}