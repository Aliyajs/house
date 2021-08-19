import React from "react";
import { Link } from "react-router-dom";
import css from "./Nav.module.css";
import { useState, useEffect } from "react";


function Nav() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div className={css.container}>
      <div className={css.header__left}>
        <Link to="/">
          <img className={css.logo} src="/img/logo.svg" alt="" />
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
        <Link to="/business_center">
          <p className={css.text}>Бизнес-центр</p>
        </Link>
        <Link to="/barter">
          <p className={css.text}>Бартер</p>
        </Link>
        <Link to="/help">
          <p className={css.text}>Помощь</p>
        </Link>
        <div>
          {user === null ?
            <Link to="/auto">
              <img src="/img/user.svg" alt="" className={css.user} />
            </Link>
          : <Link to="/dashboard">
              <img src="/img/user2.svg" alt="" className={css.user} />
            </Link>
          }
         </div>
      </div>
    </div>
  );
}

export default Nav;
