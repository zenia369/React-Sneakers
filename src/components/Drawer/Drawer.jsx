import React, {useEffect, useState} from "react";
import BoxWrapp from "./BoxWrapp/BoxWrapp";
import './Drawer.css';
import ListItems from "./ListItems/ListItems";


const Drawer = ({
    onClose, 
    onRemove, 
    carts = [],
    sendOrder, 
    open,
    ...props
}) => {
    const [sum, setSum] = useState(0);
    const [offer, setOffer] = useState(false);

    useEffect(() => {
        if (carts.length > 0) {
            const value = carts.reduce((acc, el) => {
                return acc + +el.price.split(' ').join('')
            }, 0)
            setSum(value)
        }
    }, [carts]);

    useEffect(() => {

        return () => {
            setOffer(prev => !prev);
        }
    }, []);

    const handleOrder = () => {
        setOffer(prev => !prev);
        sendOrder(carts)
    }

    return (
        <div className={open ? 'overlay overlay-open' : 'overlay'}>
            <div className={ open ? "overlay-drawer overlay-drawer-open" : 'overlay-drawer'}>

                <div className="head">
                    <h2>Корзина</h2>
                    <img onClick={onClose} className="delete" src="/img/delete.svg" alt="Close" />
                </div>

                {
                    carts.length <= 0
                        ? offer 
                            ? <BoxWrapp 
                                handleClick={onClose} 
                                text={`Ваше замовлення скоро буде передане кур'єру.`} 
                                title={'Замовлення оформлено!'} 
                                imgSrc={'./img/Order.svg'}
                              /> 
                            : <BoxWrapp 
                                handleClick={onClose} 
                                text={'Добавте хоч одну пару кросівок щоб зробити замовлення.'} 
                                title={'Корзина пуста'} 
                                imgSrc={'./img/box.svg'}
                              />
                        : <ListItems
                            sum={sum}
                            onRemove={onRemove}
                            carts={carts}
                            handleOrder={handleOrder}
                          /> 

                }

            </div>
        </div>
    )
}

export default Drawer