import { Link } from '@material-ui/core';
import React from 'react';
import css from './Card.module.css'

function Card() {
    return (
        <div className={css.container}>
            <div className={css.card}>
            <img className={css.card__img} src="https://cdn.vox-cdn.com/thumbor/zVuv0s-NzoqRQef_zb91-X8sT88=/0x0:1800x1168/1200x800/filters:focal(733x429:1021x717)/cdn.vox-cdn.com/uploads/chorus_image/image/63048549/logan_apartments.6.jpg" alt="" />
            <div className={css.card__text}>
            <p>Roselands House</p>
            <p>$ 35.000.000</p>
            <p>3-ком.кв.,600м2,35 этаж из 50</p>
            <p>г.Бишкек</p>
            </div>
            <Link to="/card">
                <a className={css.deteil} href="">Подробнее -> </a>
            </Link>
            </div>
        </div>
    )
}
export default Card;