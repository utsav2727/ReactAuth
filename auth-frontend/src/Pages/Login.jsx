import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { PrimaryButton, Stack, TextField, initializeIcons } from '@fluentui/react'
import { getToken, saveToken } from '../CustomHooks/useToken';
import { useNavigate } from 'react-router-dom';
import UserContext from '../Context/UserContext';

initializeIcons();
const Login = () => {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const context = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await loginUser({
            userName,
            password
        });
        const isToken = getToken();
        if (isToken) {
            sessionStorage.removeItem('token');
        }
        saveToken({ ...token, username: userName, isLoggedIn: true });
        context.setUser({ ...token, username: userName, isLoggedIn: true })
        navigate('/home')
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