import React from 'react';
import css from './Header.module.css'

function Header() {
    return (
      <div className={css.container}>
        <div className={css.header__left} >
            <img src="./img/logo.svg" alt="" />
        </div>
        <div className={css.header__right}>
            <p>About us</p>
            <p>Contacts</p>
            <select name="" id="">
                  <option value="#">Кыргызча</option>
                  <option value="#">Русский</option>
                  <option value="#">English</option>
              </select>
              <button>
                  Войти
              </button>
        </div>
      </div>
    );
}
 export default Header;
  