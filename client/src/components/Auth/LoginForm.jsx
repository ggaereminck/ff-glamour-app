import React, {useState} from 'react'
import '../../CSS/login.css'

const LoginForm = ({onLogin}) => {

    const [errors, setErrors] = useState([])
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [isloading, setIsLoading] = useState(false)
    

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((error) => setErrors(error.error));
          }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <input className='input-box'  placeholder='Your Username' type='text' id='username' 
            name = "username"autoComplete='off' value={login.username} 
            onChange={handleChange}
            />
            <input className='input-box'  placeholder='Password' type='password' id='password' 
            name = "password"
            autoComplete='current-password' value={login.password} 
            onChange={handleChange}
            />

            <button className='login-btn' type='submit'>
            {isloading ? "Loading...." : "Login"}

            </button>
            {/* {console.log(errors)} */}
              <span>{errors}</span>
            {/* {errors.map(err => {
                return (
                    <span key={err}>
                        {err}
                    </span>
                )
                })} */}
        </form>
    )              
}

export default LoginForm
