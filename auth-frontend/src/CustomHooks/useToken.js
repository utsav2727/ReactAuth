import React from 'react';
import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }
    const [token, setToken] = useState(getToken())

    const saveToken = (credential) => {
        const strCredential = JSON.stringify(credential);
        sessionStorage.setItem('token', strCredential);
        setToken(strCredential);
    }


    return {
        setToken: saveToken,
        token
    }

}

export default useToken