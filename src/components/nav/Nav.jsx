import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import css from './Nav.module.css';



function Nav() {
      return (
        <div className={css.container}>
        <div className={css.header__left} >
            <Link to="/" >
              <img className={css.image}  src="/img/logo.svg"/>
            </Link>
            <h2>CasHome</h2>
        </div>
        <div className={css.header__right}>
          <Link to="/about">
            <p className={css.text}>О нас</p>
          </Link>
          <Link to="/partner">
            <p className={css.text}>Партнеры</p>
          </Link>
          <Link to="/business_center">
            <p className={css.text}>Бизнес-центр</p>
          </Link>
          <Link to="/barter">
            <p className={css.text}>Бартер</p>
          </Link>
          <Link to="/help">
            <p className={css.text}>Помощь</p>
          </Link>
          <Link to="/auto">
                 <img src="/img/user.svg" alt="" className={css.user}/>
              </Link>
            {/* {
              user === null ? <NavLink  to="/auto">
              <img src="/img/user.svg" alt="" className={css.user}/>
              
             : <p>dsdfghj</p>
             </NavLink>  
            } */}
             
             

          </div>
        </div>
    );
}
 export default Nav;
  