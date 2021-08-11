import React from "react";
import css from "./Header.module.css";

function Header() {
  return (
    <div className={css.container}>
      <div>
        <img className={css.design__img} src="/img/design.jpg" alt="" />
        <div className={css.title}>
                <h2 className={css.text}>Find The Place To Live <span>Your Dreams</span> <br /> Easily Here!</h2>
                <h2 className={css.text}>Welcome to CasHome!</h2>
                <p className={css.about}>
                    Everything you need about finding your place to live will be here, where it will be easier for you
                </p>
            </div>
      </div>
      <div className={css.main}>
            <div className={css.item}>
            <input className={css.first} type="text" placeholder="Начать поиск" />
            <input className={css.search} type="text" placeholder="От" />
            <input className={css.search} type="text" placeholder="До" />
            <input className={css.search} type="text" placeholder="Введите город" />
            <button className={css.btn}>Найти</button>
            </div>
        </div>
    </div>
  );
}
export default Header;
