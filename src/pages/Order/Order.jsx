import React, {useEffect} from "react";
import './Order.css';

import {useNavigate} from 'react-router-dom';
import EmptyBoxForReactions from "../../components/EmptyBoxForReactions/EmptyBoxForReactions";
import Card from "../../components/Card/Card";


const Order = ({orders = [], ...props}) => {
    const navigation = useNavigate();
    const handleGoBack = () => {
        navigation(-1)
    }

    useEffect(() => {
        document.title = 'React | History sneakers';
    }, [])

    return (
        <section className="Order">
            <div className="header">
                <button className="btn-back" onClick={handleGoBack}>
                    <img width={40} height={40} src="/img/squareGoBack.svg" alt="go back" />
                </button>
                <h2>Все те що я купляв</h2>
            </div>
            <div className="content">
                {
                    orders.length <= 0 
                    ? <EmptyBoxForReactions
                        goBack={handleGoBack} 
                        title={'Ви ще нічого не купляли'}
                        text={'зробіть замовлення щоб тут щось появилось'}
                        imgSrc={'./img/emoji-order.svg'}
                    />
                    : orders.map((el, i) => {
                        return (
                            <Card 
                                key={i+el.name}
                                {...el}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Order