import React from "react";
import {FaUserAlt} from 'react-icons/fa'
import {IoMdLogOut} from 'react-icons/io'
import { NavLink } from "react-router-dom";



export default function Header({user,setUser, showForm, setShowForm}){
  

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
        <div className='nav sticky'>
                <NavLink to='/'>
                    <div className='home-container'>
                        <img className='logo' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d1cec3ab-18e2-4db8-a5b6-0e2723694736/d484vzz-7f8a254b-437d-4fc2-948a-ee0e8864d44f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QxY2VjM2FiLTE4ZTItNGRiOC1hNWI2LTBlMjcyMzY5NDczNlwvZDQ4NHZ6ei03ZjhhMjU0Yi00MzdkLTRmYzItOTQ4YS1lZTBlODg2NGQ0NGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2j9N7ovPrUjBMBBf3RSQqxLL2JckRZNu4P7NejA2kIw" alt="logo" />
                        <a className="app-logo">
                            <h4>GalmourGram</h4>
                        </a> 
                    </div>     
                </NavLink>       
            <div className='user-section'>
                <div className='log-btn'>
                    <NavLink to="/Profile">
                        <button  className='profile-btn' type="submit">
                        <FaUserAlt />              
                        </button>
                    </NavLink>
                </div>
                <div className='logout-btn'>
                    <button onClick={handleLogOut}>
                        <IoMdLogOut />
                    </button>
                </div>
            
            </div>
        </div>
    )
}