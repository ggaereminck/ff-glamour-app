import React from "react";


export default function Header({user,setUser}){


    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        }).then(r => {
            if(r.ok){
                setUser(null);
            }
        })
    }

    return (
        <div>
            Header
            <p>{user.username}</p>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}