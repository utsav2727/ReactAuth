import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getToken } from '../CustomHooks/useToken';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const token = getToken();
    const navigate = useNavigate();


    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    }, [])



    return (
        <div>
            <Navbar token={token} activePage="home" />
            <div>
                Home
            </div>
        </div>
    )
}

export default HomePage