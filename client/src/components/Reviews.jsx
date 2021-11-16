import React from "react";

export default function Reviews({rating, comment}){
    return (
        <div>
            <p>{rating}</p>
            <p>{comment}</p>
        </div>
    )
}