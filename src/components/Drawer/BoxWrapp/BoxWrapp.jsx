import React from 'react';
import './BoxWrapp.css';
import ButtonGoBack from '../../UI/ButtonGoBack/ButtonGoBack'


const BoxWrapp = (props) => {
    
    return (
        <div className='empty'>
            <div className='empty__wrapp'>
                <div className='empty__wrapp__header'>
                    <img src={props.imgSrc} width={'120px'} height={'120px'} alt="box wrapper" />
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                <div>
                    <ButtonGoBack handleClick={props.handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default BoxWrapp