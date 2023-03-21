import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import DarkButton from "../darkButton/darkButton";
import "./header.css";

const NavBar = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = (event) => {
        setIsActive(current => !current);
    };

    const navigate = useNavigate();
    const goToHomePage = () =>{
        navigate("/");
    }

    return (
        <header>
            <div onClick={goToHomePage} className="hover title-logo">
                FakeStore
            </div>
            <div
                onClick={handleClick}
                className="logo-image"
            >
                <img src={require("../../common_utilities/menu-icon.png")} alt="Logo" />
            </div>
            <ul className={isActive ? "active" : "nav-list"}>
                <li className="nav-items">
                    <Link className="link" to="/">Home</Link>
                </li>
                <li onClick={props.onClickRoute} className="nav-items">
                    <Link className="link" to="searchPage">Search</Link>
                </li>
                <li className="nav-items">
                    <Link className="link" to="loginForm">
                        <DarkButton
                            className={props.isLoggedIn ? "dark-button" : "blue-button"}
                            onClick={props.logoutIfNecessary}
                            action={props.isLoggedIn ? "Logout" : "Login"}
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default NavBar;