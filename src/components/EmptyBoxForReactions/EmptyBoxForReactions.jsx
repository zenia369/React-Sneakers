import React from "react";
import './EmptyBoxForReactions.css';
import ButtonGoBack from "../UI/ButtonGoBack/ButtonGoBack";

const EmptyBoxForReactions = (props) => {
    return (
        <div className="emtpyBoxReaction">
            <div className="emptyReaction">
                <img src={props.imgSrc} alt="Reaction box" />
                <h2>{props.title}</h2>
                <h4>{props.text}</h4>
            </div>
            <div className="btnReaction">
                <ButtonGoBack handleClick={props.goBack} />
            </div>
        </div>

    )
}

export default EmptyBoxForReactions