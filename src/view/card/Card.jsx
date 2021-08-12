import React from 'react';
import { Link } from 'react-router-dom';
import css from './Card.module.css'

function Card() {
    return (
        <div className={css.container}>
            <div className={css.card}>
            <img className={css.card__img} src="/img/card.png" alt="" />
            <div className={css.card__text}>
            <p>Roselands House</p>
            <p>$ 35.000.000</p>
            <p>3-ком.кв.,600м2,35 этаж из 50</p>
            <p>г.Бишкек</p>
            </div>
            <Link to="/cardmap">
               <a className={css.deteil} href="">Подробнее -></a>
            </Link>
            </div>
        </div>
    )
}

export default Card;