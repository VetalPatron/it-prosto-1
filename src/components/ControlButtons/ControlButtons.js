import React from 'react';
import s from './ControlButton.module.css';

const ControlButton = () => {
    return (
        <div className={s.blocButton}>
            <button>Создать</button>
            <button> Редактировать</button>
            <button>Удалить</button>
        </div>


    );
}


export default ControlButton;