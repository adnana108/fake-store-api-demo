import React from "react";
import ReusableBox from "../../components/reusableBox/reusableBox";
import "./homePage.css";

const HomePage = () => {
    return (
        <div className="main-box">
            <ReusableBox
                title="Welcome"
                description="To the React Web Starter App"
            />
            <img
                className="home-photo"
                alt="drop"
                src={require('../../common_utilities/drop.jpg')}
            >
            </img>
        </div>
    );
};
export default HomePage;