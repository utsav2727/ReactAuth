import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import useToken from '../CustomHooks/useToken';


const HomePage = () => {
    // const [token, setToken] = useState();
    const { token, setToken } = useToken();

    if (!token) {
        { return <Login setToken={setToken} /> }
    }

    return (
        <div>
            <Navbar activePage="home" />
            <div>
                Home
            </div>
        </div>
    )
}

export default HomePage