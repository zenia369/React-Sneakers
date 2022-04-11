import React from "react";
import './Favorites.css'

import {Link, useNavigate} from 'react-router-dom';

import Card from "../../components/Card/Card";
import EmptyFavorites from "./EmptyFavorites/EmptyFavorites";

const Favorites = ({items, HandleOnAddCart, onDeleteCartItem,...props}) => {
    const navigation = useNavigate()

    const handleGoBack = () => {
        navigation('/')
    }

    return (
        <section className="favorites">
            <div className="header">
                <Link to='/'>
                    <img width={40} height={40} src="/img/squareGoBack.svg" alt="go back" />
                </Link>
                <h2>
                    Всі мої збереженні кросівки
                </h2>
            </div>

            <div className="content">
                {
                    items.length > 0
                    ? items.map((el, index) => {
                            return (
                                <Card
                                key={index}
                                {...el}
                                srcNum={el.srcNum}
                                favorites={true}
                                onDeleteFavoriteItem={props.onDeleteFavoriteItem}
                                isDelete={false}
                                onClickAdd={HandleOnAddCart}
                                onRemove={onDeleteCartItem}
                                />
                            )
                        })
                    : <EmptyFavorites goBack={handleGoBack} />
                }
            </div>
        </section>
    )
}

export default Favorites