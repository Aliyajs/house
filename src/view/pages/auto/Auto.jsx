import React from "react";
import css from "./Auto.module.css";
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";


function Auto() {
  const [login , setLogin] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const submit = (e) => {
    e.preventDefault();
    if(login === "cassano" && password === "123"){
      localStorage.setItem("user", JSON.stringify({
          login,
          accesToken: "cassano"
      }))
      history.push("/dashboard")
    }
  }

  return (
    <div className={css.container}>
      <form onSubmit={submit} className={css.auto}>
        <h3 className={css.title}>CasHome</h3>
        <div className={css.search}>
          <input value={login} onChange={(e) => setLogin(e.target.value)} className={css.name} type="text" placeholder="Телефон, имя пользователя или эл.адрес" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className={css.password} type="password" placeholder="Пароль" />
          <br />
          <button type="submit" className={css.btn}>Войти</button>
        </div>
        <a className={css.forgot} href="#">Забыли пароль?</a>
      </form>

      <div className={css.register}>
        <p className={css.text}>У вас ещё нет аккаунта?</p>
        <Link to="/register">
          <a className={css.regis} href="#">Зарегистрироваться</a>
        </Link>
      </div>

      <div className={css.help}>
        <Link to="/help">
          <p className={css.text__help}>Есть вопросы? Перейдите в раздел помощь</p>
        </Link>
      </div>
    </div>
  );
}

export default Auto;
