import React from 'react';
import css from './Header.module.css';

function Header() {
    return (
      <div className={css.container}>
          <div className={css.nav}>
          <nav className={css.header__left}>
            <img src="/img/logo.svg" alt="" />
            <p className={css.title}>RP</p>
          </nav>
          <nav className={css.header__right}>
              <p>About Us</p>
              <p>Contacts</p>
              <select name="" id="">
                  <option value="#">Кыргызча</option>
                  <option value="#">Русский</option>
                  <option value="#">English</option>
              </select>
              <button>
                  Войти
              </button>
          </nav>
          </div>
          <div className={css.info}>
            <img src="/img/house.jpg" alt="" />
          </div>
      </div>
    );
}
  
export default Header;
