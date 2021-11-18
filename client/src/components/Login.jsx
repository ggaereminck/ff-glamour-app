import { useState } from "react"
import LoginForm from "./Auth/LoginForm"
import SignUpForm from "./Auth/SignUpForm"
import '../CSS/login.css';
import LoginVid from '../CSS/loginvid.mp4'

const Login = ({onLogin}) => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <div className="auth-container">
            <div className='auth-card'>
                <div className='inner-card'>
                    {showLogin ? (
                    <div className= 'card-front'>   
                        <LoginForm onLogin={onLogin}/>               
                        <div>
                            <button onClick={() => { 
                                setShowLogin(false)
                            }}>
                        
                                Register Here
                            </button>
                        
                        </div>
                    </div>
                        ) : (
                    <div className='card-back'>
                        <SignUpForm onLogin={onLogin}/>
                        <div btn-class>
                            <button onClick={() => { 
                                setShowLogin(true);
                            }}>
                                Log In
                            </button>
                        </div>
                    </div>
                    )}
                </div>
            </div>  
            <video autoPlay loop muted className="video-container">
                <source src={LoginVid} type='video/mp4'/>
            </video>  
        </div>
           
        </>
    )
}

export default Login
