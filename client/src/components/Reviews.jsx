import React from "react";

export default function Reviews({rating, comment}){
    return (
        <div>
            <p>{`${rating}/5`}</p>
            <p>{`Comment: ${comment}`}</p>
        </div>
    )
}