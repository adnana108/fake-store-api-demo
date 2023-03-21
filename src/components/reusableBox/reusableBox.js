import React from "react";
import "../reusableBox/reusableBox.css";

const ReusableBox = (props) => {
    return (
        <div className="reusable-box">
            <h1 className="reusable-title">{props.title}</h1>
            <article className={`"reusable-description" ${props.className}`}>{props.description}</article>
        </div>
    );
};

export default ReusableBox;