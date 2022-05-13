import React from "react";
import './ButtonGoBack.css';

const ButtonGoBack = ({handleClick}) => {
    return (
        <button onClick={handleClick} className="btn-close">
            <img src="img/arrow.svg" alt="Arrow"></img>
            Повернутись назад
        </button>
    )
}

export default ButtonGoBack