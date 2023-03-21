import React from "react";
import DarkButton from "../../components/darkButton/darkButton";
import ReusableBox from "../../components/reusableBox/reusableBox";
import { useState } from "react";
import "./loginpage.css";

const LoginForm = (props) => {

    let [areInputsEmpty, setInputsEmpty] = useState(true);

    const updateState = () => {
        setInputsEmpty(!props.usernameRef.current.value
            || !props.passRef.current.value)
    }

    return (
        <div className="main-login">
            <ReusableBox
                title="Login"
                className={props.isLoggedIn ? null : "error"}
                description={props.description}
            />
            <form>
                <div className="container-field">
                    <label htmlFor="user">User</label>
                    <input
                        onChange={updateState}
                        ref={props.usernameRef}
                        id="email"
                        type="text"
                        placeholder="youremail@domain.com"
                    />
                </div>
                <div className="container-field">
                    <label htmlFor="password">Pasword</label>
                    <input
                        onChange={updateState}
                        ref={props.passRef}
                        id="password"
                        type="password"
                        placeholder="password"
                    />
                </div>
                <div className="container-field">
                    <DarkButton
                        onClick={props.onClick}
                        action="Login"
                        className="dark-button"
                        isDisabled={areInputsEmpty}
                    />
                </div>
                {props.errorMessage ? <div>{props.errorMessage}</div> : null}
            </form>
        </div>
    );
};

export default LoginForm;