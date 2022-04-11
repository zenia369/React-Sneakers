import React from 'react';
import './EmptyBox.css';
import ButtonGoBack from '../../UI/ButtonGoBack/ButtonGoBack'


const EmptyBox = (props) => {
    

    return (
        <div className='empty'>
            <div className='empty__wrapp'>
                <div className='empty__wrapp__header'>
                    <img src="./img/box.svg" width={'120px'} height={'120px'} alt="Empty box" />
                    <h3>Корзина пуста</h3>
                    <p>Добавте хоч одну пару кросівок щоб зробити замовлення.</p>
                </div>
                <div>
                    <ButtonGoBack handleClick={props.handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default EmptyBox