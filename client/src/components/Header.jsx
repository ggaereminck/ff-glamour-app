import React from "react";
import {AiOutlineUser} from 'react-icons/ai'
import {IoMdLogOut} from 'react-icons/io'


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
        <div className='nav sticky'>
              <a href="/" className="app-logo">
                       <h4>App Name</h4>
                </a> 
            
            <div className='user-section'>
                <div className='log-btn'>
                    <button className='profile-btn' type="submit">
                    <AiOutlineUser />
                        
                    </button>
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