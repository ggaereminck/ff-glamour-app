import React from 'react'
import { NavLink } from "react-router-dom";



export default function NavBar() {




    return (
        <nav id="navstyle">
     
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/Profile">Profile </NavLink>
        
            
        </nav>
    )
}