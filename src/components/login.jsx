import React, { useState } from 'react'
import '../new.css'
const Login = () => {
    const loginintialstate = {}
    const [login, setlogin] = useState(loginintialstate)

    const getLoginData = (e) => {
        const {name, value} = e.target;
        
        setlogin({ ...login,[name]: value })
    }

    const submitlogin = (e) => {
        e.preventDefault()
        console.log(login)
    }
    return (
        <>
            <div className="login">
                <div className="form">
                    <span className="material-icons">Login</span>
                    <input type="text" name='email' onChange={getLoginData} placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                    <input type="password" name='password' onChange={getLoginData} placeholder="password" required />
                    <button className='btnn' onClick={submitlogin}>login</button>
                </div>
            </div>
        </>
    )
}

export default Login


