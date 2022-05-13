import React from "react";

const ListItems = ({carts, onRemove, sum, handleOrder}) => {

    return (
        <>
            <div className="items">
                {
                    carts.map( (el, i) => {
                        return (
                            <div className="cartItem" key={i}>
                                <div className='cartItem-img'
                                    style={{ backgroundImage: `url(img/shoes/${el.srcNum}.svg)` }}>
                                </div>
                                <div>
                                    <p>
                                        {el.name}
                                    </p>
                                    <b>{el.price} грн.</b>
                                </div>
                                <img onClick={() => onRemove(el.name, el.price.split(' ').join(''), el.id)} className="delete" src="img/delete.svg" alt="delete" />
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

                <button onClick={handleOrder} className="greenButton">
                    Оформити замовлення
                    <img src="img/arrow.svg" alt="Arrow" />
                </button>
            </div>
        </>
    )
}

export default ListItems