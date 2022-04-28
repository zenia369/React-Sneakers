import React, { useEffect } from "react";
import './Favorites.css'

import {Link, useNavigate} from 'react-router-dom';

import Card from "../../components/Card/Card";
import checkIsSame from "../../helpers/checkIsAdd";
import EmptyBoxForReactions from "../../components/EmptyBoxForReactions/EmptyBoxForReactions";

const Favorites = ({items, favorites = [], HandleOnAddCart, onDeleteCartItem,...props}) => {
    const navigation = useNavigate();

    useEffect(() => {
        document.title = 'React | Favorites sneakers';
    }, [])

    useEffect(() => {
        const {arr1: updateData} = checkIsSame(items, favorites, {favorites:true})
        favorites = updateData
    }, [items])

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
                    favorites.length > 0
                    ? favorites.map((el, index) => {
                            return (
                                <Card
                                key={index}
                                {...el}
                                srcNum={el.srcNum}
                                favorites={true}
                                add={true}
                                onDeleteFavoriteItem={props.onDeleteFavoriteItem}
                                isDelete={false}
                                onClickAdd={HandleOnAddCart}
                                onRemove={onDeleteCartItem}
                                />
                            )
                        })
                    : <EmptyBoxForReactions 
                        goBack={handleGoBack} 
                        title={'Немає уподобайків'} 
                        text ={'поверніться та оберіть те що сподобається'}
                        imgSrc={'./img/emoji-favorite.svg'}
                    />
                }
            </div>
        </section>
    )
}

export default Favorites