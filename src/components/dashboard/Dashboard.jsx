import React from 'react';
import Card from '../../view/card/Card';
import css from './Dashboard.module.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Dashboard(){
    return(
        <div className={css.container}>
           <h1 className={css.personal}>Личный кабинет</h1>
           <div className={css.personal__data}>
               <h2 className={css.text}>Живете в CasHome?</h2>
               <h2 className={css.text}>Но по непредвиденным обстоятельствам хотите продать дом?</h2>
               <p className={css.sell}>То мы поможем вам продать дом!!!</p>
               <p className={css.sell}>Оставьте ваш номер телефона здесь, чтобы мы смогли связаться с вами  &darr; </p> 
               <input className={css.input} type="number" placeholder="Номер телефона" />
               <br />
               <input className={css.input} type="text" placeholder="Адрес" />
               <p>*Обязательно</p>
               <p>Оставьте ваш адрес место жительства</p>
           </div>




           <div>
               <Link to="/auto">
                   <button className={css.btn__auto}>Выйти из личного кабинета</button>
               </Link>
           </div>
        </div>
    )
}