import React from "react";

export default function Reviews({rating, comment, username}){
    return (
        <div>
            <p>{username}</p>
            <p>{`${rating}/5`}</p>
            <p>{`Comment: ${comment}`}</p>
        </div>
    )
}