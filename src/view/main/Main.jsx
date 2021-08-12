import Card  from '../card/Card';
import React from 'react';
import css from './Main.module.css';

function Main() {
    return(
        <div className={css.main}>
            <Card />
        </div>  
    );
}

export default Main;