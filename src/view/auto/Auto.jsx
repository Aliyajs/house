import React from "react";
import css from "./Auto.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useHistory} from "react-router-dom"

function Auto() {

  const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
        const submit = (e) => {
        e.preventDefault();
        fetch("http://giftme.site/auth/jwt/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: login,
                password: password
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            if(data.detail){
                console.log(data)
                return;
            }
            localStorage.setItem("user", JSON.stringify(data))
            history.push("/dashboard")
        })
        .catch((error) =>{
            console.log(error)
        })
    }



  return (
    <div className={css.container}>
      <div className={css.auto}>
        <h3 className={css.title}>CasHome</h3>
        <form onSubmit={submit} className={css.search}>
          <input value={login} onChange={(e) => setLogin(e.target.value)} className={css.name} type="text" placeholder="Телефон, имя пользователя или эл.адрес" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} className={css.password} type="password" placeholder="Пароль" />
          <br />
          <button type={submit} className={css.btn}>Войти</button>
        </form>
        <a className={css.forgot} href="#">Забыли пароль?</a>
      </div>
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