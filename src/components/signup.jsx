import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useraction } from '../actions/action'

export default function Signup(){
    const dispatch=useDispatch()
    const intialState = {}
    const [field, setfield] = useState(intialState)
    const getData = (e) => {
        const { name, value } = e.target;
        setfield({ ...field, [name]: value })
    }

    const SubmitData = (e) => {
        e.preventDefault()
        console.log(field)
        dispatch(useraction.SignupRequest(field))
    }

    return (
        <>
            <div className="login">
                <div className="form">
                    
                        <span className="material-iconsss">Registration</span>
                        <input type="text" name='firstname' onChange={getData} placeholder="firstname" required />
                        <input type='text' name='lastname' onChange={getData} placeholder="lastname" required />
                        <input type="text" name='email' onChange={getData} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                        <input type="password" name='password' onChange={getData} placeholder="password" required />
                        <button onClick={SubmitData}>login</button>
                </div>
            </div>
        </>
    )
}

