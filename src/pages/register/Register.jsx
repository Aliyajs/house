import react from "react";
import css from "./Register.module.css";
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className={css.container}>
      <div className={css.register}>
        <h3 className={css.title}>CasHome</h3>
        <p className={css.cashome}>Зарегистрируйтесь, чтобы смотреть фото дома вашей мечты.</p>
        <div className={css.search}>
          <input className={css.name__phone} type="text" placeholder="Моб.телефон или эл.адрес" />
          <input className={css.name} type="text" placeholder="Имя и фамилия" />
          <input className={css.name} type="text" placeholder="Имя пользователя" />
          <input className={css.password} type="password" placeholder="Пароль" />
          <button className={css.btn}>Регистрация</button>
        </div>
        <p className={css.privacy}>Регистрируясь, вы принимаете наши <b>Условия, Политику использования данных и Политику в отношении файлов cookie.</b></p>
      </div>
      <div className={css.welcome}>
        <p className={css.text}>Есть аккаунт?</p>
        <Link to="/auto">
          <a className={css.regis} href="#">Вход</a>
        </Link>
      </div>
    </div>
  );
}