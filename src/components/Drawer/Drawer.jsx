import React, {useEffect, useState} from "react";
import './Drawer.css';
import EmptyBox from './EmptyBox/EmptyBox';


const Drawer = ({onClose, onRemove, carts = [], ...props}) => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        if (carts.length > 0) {
            const value = carts.reduce((acc, el) => {
                return acc + +el.price.split(' ').join('')
            }, 0)
            setSum(value)
        }
    }, [carts])

    return (
        <div className="overlay">
            <div className="overlay-drawer">

                <h2>
                    Корзина
                    <img onClick={onClose} className="delete" src="/img/delete.svg" alt="Close" />
                </h2>

                {
                    carts.length <= 0
                        ? <EmptyBox handleClick={onClose} />
                        :
                        <>
                            <div className="items">
                                {
                                    carts.map( (el, i) => {
                                        return (
                                            <div className="cartItem" key={i}>
                                                <div className='cartItem-img'
                                                    style={{ backgroundImage: `url(/img/shoes/${el.srcNum}.svg)` }}>
                                                </div>
                                                <div>
                                                    <p>
                                                        {el.name}
                                                    </p>
                                                    <b>{el.price} грн.</b>
                                                </div>
                                                <img onClick={() => onRemove(el.name, el.price.split(' ').join(''), el.id)} className="delete" src="/img/delete.svg" alt="delete" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cardTotal">
                                <ul>
                                    <li>
                                        <span>Всього на:</span>
                                        <div></div>
                                        <b>{sum} грн</b>
                                    </li>
                                    <li>
                                        <span>ПДВ 7%</span>
                                        <div></div>
                                        <b>{sum + (sum * 0.07)} грн</b>
                                    </li>
                                </ul>

                                <button className="greenButton">
                                    Оформити замовлення
                                    <img src="/img/arrow.svg" alt="Arrow" />
                                </button>
                            </div>
                        </>

                }



            </div>
        </div>
    )
}

export default Drawer