import React, {useState} from 'react'

const LoginForm = ({onLogin}) => {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const [isloading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])

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
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input type='text' id='username' 
            name = "username"autoComplete='off' value={login.username} 
            onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input type='password' id='password' 
            name = "password"
            autoComplete='current-password' value={login.password} 
            onChange={handleChange}
            />
            <button type='submit'>
            {isloading ? "Loading...." : "Login"}
            </button>
            {errors.map(err => {
                return (
                    <p key={err}>
                        {err}
                    </p>
                )
                })}
        </form>
    )              
}

export default LoginForm
