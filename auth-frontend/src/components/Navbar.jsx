import React, { useContext } from 'react';
import { DefaultEffects } from '@fluentui/react';
import { appTheme } from '../CustomStyle/theme';
import { Link } from 'react-router-dom';
import UserContext from '../Context/UserContext';

const Navbar = ({ activePage, token }) => {

    const { user } = useContext(UserContext);
    return (
        <div className='li-custom' style={{ display: "flex", padding: "5px", paddingLeft: "10px", paddingRight: "10px", justifyContent: "space-between", alignItems: "center", boxShadow: DefaultEffects.elevation4 }}>
            <h1 style={appTheme.fonts.large}>Auth- FrontEnd</h1>
            <ul style={{ display: "flex", listStyle: "none" }}>
                <li>
                    <Link to={"/home"}>
                        <a className={activePage == "home" ? 'is-active' : ''} >Home</a>
                    </Link>
                </li>
                <li >
                    <Link to={"/about"}>
                        <a className={activePage == "about" ? 'is-active' : ''}>About</a>
                    </Link>
                </li>
                {user.isLoggedIn ? null : <li >
                    <Link to={"/"}>
                        <a className={activePage == "login" ? 'is-active' : ''}>Login</a>
                    </Link>
                </li>}
            </ul>
        </div>
    )
}

export default Navbar