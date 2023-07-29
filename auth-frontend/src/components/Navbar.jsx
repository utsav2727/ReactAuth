import React from 'react';
import { DefaultEffects } from '@fluentui/react';
import { appTheme } from '../CustomStyle/theme';
import { Link } from 'react-router-dom';

const Navbar = ({ activePage }) => {
    return (
        <div className='li-custom' style={{ display: "flex", padding: "5px", justifyContent: "space-between", alignItems: "center", boxShadow: DefaultEffects.elevation4 }}>
            <h1 style={appTheme.fonts.large}>Auth- FrontEnd</h1>
            <ul style={{ display: "flex", listStyle: "none" }}>
                <li>
                    <Link to={"/"}>
                        <a className={activePage == "home" ? 'is-active' : ''} >Home</a>
                    </Link>
                </li>
                <li >
                    <Link to={"/"}>
                        <a >About</a>
                    </Link>
                </li>
                <li >
                    <Link to={"/login"}>
                        <a className={activePage == "login" ? 'is-active' : ''}>Login</a>
                    </Link>
                </li>
                <li >
                    <Link to={"/"}>
                        <a href="#"> Logout</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar