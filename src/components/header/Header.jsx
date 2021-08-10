import React from 'react';
import css from './Header.module.css'

function Header() {
    return (
      <div className={css.container}>
        <div className={css.header__left} >
            <img src="./img/logo.svg" alt="" />
            <h2>CasHome</h2>
        </div>
        <div className={css.header__right}>
          <p className={css.text}>About us</p>
          <p className={css.text}>Contacts</p>
        <img className={css.img} src="https://image.flaticon.com/icons/png/512/1246/1246466.png" alt="" />
            <select  className={css.select} id="">
                  <option value="#">Кыргызча</option>
                  <option value="#">Русский</option>
                  <option value="#">English</option>
              </select>
              <img src="./img/user.svg" alt="" className={css.user}/>
        </div>
      </div>
    );
}
 export default Header;
  