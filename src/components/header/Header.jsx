import React from 'react';
import Main from '../../view/main/Main';
import Frame from '../frame/Frame';
import css from './Header.module.css';
import Articles from '../articles/Articles';
import News from '../news/News';
import Youtube from '../youtube/Youtube';
import Investors from '../investors/Investors';

function Header() {
    return (
        <div className={css.box1}>
            <img className={css.design__img} src="./img/design.jpg" />
            <div className={css.title}>
                <h2 className={css.text}>Find The Place To Live <span>Your Dreams</span> <br /> Easily Here!</h2>
                <h2 className={css.text}>Welcome to CasHome!</h2>
                <p className={css.about}>
                    Everything you need about finding your place to live will be here, where it will be easier for you
                </p>
            </div>

            <Frame/>
            <Articles/>
            <h1 className={css.wrapper}>Новое строительство</h1>
            <Youtube/>
            <Main/>
            <News/>
            <h1 className={css.logo}>Что говорят наши инвесторы</h1>
            <Investors/>
        </div>
    );
}
export default Header;