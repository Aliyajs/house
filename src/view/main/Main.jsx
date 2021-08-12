import React from 'react';
import Card from '../card/Card';
import css from './Main.module.css'


function Main() {
    return (
        <div className={css.card}>
            <Card />
        </div>
    )
}

export default Main;