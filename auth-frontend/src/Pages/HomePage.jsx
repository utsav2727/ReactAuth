import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { redirect } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
const HomePage = () => {
    const [token, setToken] = useState();

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