import React from "react";
import './EmptyFavorites.css'
import ButtonGoBack from "../../../components/UI/ButtonGoBack/ButtonGoBack";


const EmptyFavorites = ({goBack}) => {

    return (
        <div className="emtpyBoxFavorite">
            <div className="emptyFavorite">
                <img src="./img/emogi-favorite.svg" alt="favorite emoji" />
                <h2>Немає уподобайків</h2>
                <h4>поверніться та оберіть те що сподобається</h4>
            </div>
            <div className="btnFavorite">
                <ButtonGoBack handleClick={goBack} />
            </div>
        </div>

    )
}

export default EmptyFavorites