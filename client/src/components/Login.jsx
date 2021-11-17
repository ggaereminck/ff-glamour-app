import { useState } from "react"
import LoginForm from "./Auth/LoginForm"
import SignUpForm from "./Auth/SignUpForm"

const Login = ({onLogin}) => {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
            <div>   
                <LoginForm onLogin={onLogin}/>               
                <p>
                    Don't have an account? 
                    <button onClick={() => { 
                        setShowLogin(false);
                    }}>
                        Sign Up
                    </button>
                </p>
            </div>
                ) : (
            <div>
                <SignUpForm onLogin={onLogin}/>
                <p>
                    Already have an account? 
                    <button onClick={() => { 
                        setShowLogin(true);
                    }}>
                        Log In
                    </button>
                </p>
            </div>
            )}
        </div>
    )
}

export default Login
