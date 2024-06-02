import React from "react";
import { useNavigate } from "react-router-dom";

function BackToTopButton(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/${props.category}`);
    }

    return (
        <button onClick={handleClick}>
            Go Back
        </button>
    );
}

export default BackToTopButton;
