import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { PrimaryButton, Stack, TextField, initializeIcons } from '@fluentui/react'
import useToken from '../CustomHooks/useToken';

initializeIcons();
const Login = (props) => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const { token, setToken } = useToken();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await loginUser({
            userName,
            password
        });
        console.log(token);
        props?.setToken(token);
    }

    const loginUser = async (credential) => {
        const data = await fetch('http://localhost:8080/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        });
        return data.json()
    }

    return (
        <div>
            <Navbar activePage={"login"} />
            <div className='center-div'>
                <TextField label="Email " required onChange={(e) => { setUserName(e.target.value) }} value={userName} />
                <TextField
                    label="Password"
                    type="password"
                    canRevealPassword
                    revealPasswordAriaLabel="Show password"
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <PrimaryButton style={{ marginTop: "10px" }} text="Login"
                    onClick={(e) => handleSubmit(e)}
                />
            </div>
        </div>
    )
}

export default Login