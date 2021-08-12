import React from "react";
import css from "./Auto.module.css";
function Auto() {
  return (
    <div className={css.container}>
      <div className={css.auto}>
        <h3 className={css.title}>CasHome</h3>
        <div className={css.search}>
          <input className={css.name} type="text" placeholder="Телефон, имя пользователя или эл.адрес" />
          <input className={css.password} type="password" placeholder="Пароль" />
          <br />
          <button className={css.btn}>Войти</button>
        </div>
        <a className={css.forgot} href="#">Забыли пароль?</a>
      </div>
      <div className={css.register}>
        <p className={css.text}>У вас ещё нет аккаунта?</p>
        <a className={css.regis} href="#">Зарегистрироваться</a>
      </div>
    </div>
  );
}
export default Auto;