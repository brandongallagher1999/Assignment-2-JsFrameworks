
import {Fragment, useEffect, useState} from "react";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
const axios = require("axios");


const NavBar = () =>
{
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                    Home
                    </a>

                    <a className="navbar-item" href="https://github.com/brandongallagher1999/CrypTorrents-React-FastAPI">
                    Documentation
                    </a>

                    <a className="navbar-item" href="/crud">
                    CRUD
                    </a>

                    
                </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        { isAuthenticated ? <LoginButton/> : <LogoutButton/>}

                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </Fragment>
        
    );

}

export default NavBar;