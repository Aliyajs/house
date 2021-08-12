import React from "react";
import css from "./Header.module.css";
import { useEffect, useState} from "react";

function Header() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState({
    search: '',
    from: '',
    to: '',
    city: '',
  })

  useEffect(() => {
    fetch('https://60f502922208920017f39e96.mockapi.io/shop')
    .then((res) => res.json())
    .then((data) => {
        setData(data)
    })
}, [])
const submit = (e) => {
    e.prevebtDefault();
}

  return (
    <div className={css.container}>
      <div>
        <img className={css.design__img} src="/img/design.jpg" alt="" />
        <div className={css.title}>
          <h2 className={css.text}>
            Find The Place To Live <span>Your Dreams</span> <br /> Easily Here!
          </h2>
          <h2 className={css.text}>Welcome to CasHome!</h2>
          <p className={css.about}>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
        </div>
      </div>
      <div className={css.main}>
        <form onSubmit={submit} className={css.item}>
          <input
           value={search.search}
           OnChange ={(e) => setSearch({...search, search: e.target.value})} 
           className={css.first}
           type="text"
           placeholder="Начать поиск"
          />
          <input
           value={search.from}
           OnChange ={(e) => setSearch({...search, search: e.target.value})} 
           className={css.search}
           type="text"
           placeholder="От"
          />
          <input
           value={search.to}
           OnChange ={(e) => setSearch({...search, search: e.target.value})} 
           className={css.search}
           type="text"
           placeholder="До"
          />
          <input
           value={search.city}
           OnChange ={(e) => setSearch({...search, search: e.target.value})} 
           className={css.search}
           type="text"
           placeholder="Введите город"
          />
          <button type="submit" className={css.btn}>Найти</button>
        </form>
      </div>
    </div>
  );
}
export default Header;
