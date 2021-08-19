import React from 'react';
import css from './Title.module.css';
import { useEffect, useState } from "react";

function Title(props){
    
    const [search, setSearch] = useState({
        search: '',
        from: '',
        to: '',
    })
  
    const submit = (e) => {

        e.preventDefault();
        props.search(search)
        setSearch({
        search: '',
        from: '',
        to: '',
    })
    }


    return(
        <div className={css.main}>
        <form onSubmit={submit} className={css.item}>
      <input
       value={search.search}
       onChange={ (e)=>{
        setSearch({...search, search:e.target.value})
       }}
       className={css.search}
       type="text"
       placeholder="Введите город"
      />
      <input
       value={search.from}
       onChange={ (e)=>
        setSearch({...search, from:e.target.value})
       }
       className={css.search}
       type="number"
       placeholder="От"
      />
      <input
       value={search.to}
       onChange={ (e)=>
        setSearch({...search, to:e.target.value})
       }
       className={css.search}
       type="number"
       placeholder="До"
      />
      
      <button type="submit" className={css.btn}>Найти</button>
    </form>
        </div>
    );
}

export default Title;