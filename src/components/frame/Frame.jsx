import React from 'react';
import css from './Frame.module.css';

function Frame(){
    return(
        <div className={css.container}>
            <div className={css.box}>
                <img className={css.img} src="./img/Frame.svg"/>
                <div className={css.frame}>
                    <p className={css.number}>1700</p>
                    <p className={css.text}>И БОЛЕЕ <br /> ДОЛЬЩИКОВ</p>
                </div>
            </div>
            <div className={css.box}>
                <img className={css.img} src="./img/Frame2.svg"/>
                <div className={css.frame}>
                    <p className={css.number}>№1</p>
                    <p className={css.text}>ВЫБОР ГОДА 2021</p>
                </div>
            </div>
            <div className={css.box}>
                <img className={css.img} src="./img/Frame3.svg"/>
                <div className={css.frame}>
                    <p className={css.number}>3</p>
                    <p className={css.text}>ГОДА НА РЫНКЕ</p>
                </div>
            </div>
        </div>
    );
}

export default Frame;