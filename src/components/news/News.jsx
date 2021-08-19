import { Link } from '@material-ui/core';
import { func } from 'prop-types';
import React from 'react';
import css from './News.module.css';

function News(){
    return(
        <div className={css.box}>
            <h1 className={css.title}>Полезные статьи</h1>
            <div className={css.container}>
                
                <div className={css.boxs}>
                    <img className={css.img} src="./img/news.jpg" alt="" />
                    <a href="/news"><p className={css.text}>Как самостоятельно продать квартиру в Бишкеке?</p></a>
                </div>
                
                <div className={css.boxs}>
                    <img className={css.img} src="./img/news2.jpg" alt="" />
                    <a href="/newSecond"><p className={css.text}>Что выбрать: первичка или вторичка?</p></a>
                </div>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/news3.jpg" alt="" />
                    <a href="./newsThree"><p className={css.text}>Цены на недвижимость в Кыргызстане</p></a>
                </div>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/news4.jpg" alt="" />
                    <a href="/newsFour"><p className={css.text}>Служба заботы о клиентах</p></a>
                </div>
            </div>
        </div>
    );
}

export default News;