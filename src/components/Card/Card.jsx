import {React, useState} from "react";
import './Card.css'

import MyLoader from "../MyLoader/MyLoader";

const Card = ({onClickFavorite, onDeleteFavoriteItem, onClickAdd, onRemove, loading, ...props}) => {
    const isFavorites = props.favorites ? props.favorites : false;
    const [favorite, setFavorite] = useState(isFavorites);

    const HandleOnClickAdd = () => {
        onClickAdd(props)
    };

    const HandleOnClickFavorite = () => {
        setFavorite(prev => !prev);
        onClickFavorite(props)
    }

    const HandleOnRemove = () => {
        onRemove(props.name, props.price);
    }

    const HandleOnRemoveFavorite = () => {
        if(props.isDelete) {
            setFavorite(prev => !prev);
        }
        onDeleteFavoriteItem(props);
    }

    return (
        <div className="card">
            {
                loading 
                    ? <MyLoader/>
                    : <>
                        <div className="like" onClick={favorite ? HandleOnRemoveFavorite : HandleOnClickFavorite}>
                            <img className="img-btn" src={favorite ? "/img/like-active.svg" : "/img/like.svg"} alt="like-btn" />
                        </div>
                        <img width={133} height={112} src={`/img/shoes/${props.srcNum}.svg`} alt="Sneakers" />
                        <h5>{props.name}</h5>
                        <div className="card__button">
                            <div className="card__button-price">
                                <p>Ціна:</p>
                                <b>{props.price}грн</b>
                            </div>
                            <button onClick={props.add ? HandleOnRemove : HandleOnClickAdd} className="card__button-btn"><img className="img-btn" src={props.add ? "/img/plus-active.svg" : "/img/plus.svg"} alt="plus" /></button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Card