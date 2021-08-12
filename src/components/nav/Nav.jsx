import React from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.css';

function Nav() {
    return (
<div className={css.container}>
        <div className={css.header__left} >
          <Link to="/">
            <img className={css.logo} src="./img/logo.svg" alt="" />
          </Link>
            <h2>CasHome</h2>
        </div>
        <div className={css.header__right}>
          <Link to="/aboutus">
            <p className={css.text}>О нас</p>
          </Link>
          <Link to="/partners">
            <p className={css.text}>Партнеры</p>
          </Link>
          <Link to="/help">
            <p className={css.text}>Помощь</p>
          </Link>
          <div className={css.option}>
            <img className={css.img} src="https://image.flaticon.com/icons/png/512/1246/1246466.png" alt="" />
            <select  className={css.select} id="">
                <option value="#">Кыргызча</option>
                <option value="#">Русский</option>
                <option value="#">English</option>
            </select>
          </div>
          <div>
              <Link to="/auto">
                 <img src="./img/user.svg" alt="" className={css.user}/>
              </Link>
            </div>
        </div>
      </div>
      
    );
}
  
export default Nav;
