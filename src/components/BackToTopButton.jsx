import React from "react";
import { useNavigate } from "react-router-dom";

function BackToTopButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${props.category}`);
    }

    return (
        <div className="backToTopButtonContainer">
            <button className="backToTopButton" onClick={handleClick}>Go Back</button>
        </div>
    );
}

export default BackToTopButton;
