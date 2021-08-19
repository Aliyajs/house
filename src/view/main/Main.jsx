import Card  from '../card/Card';
import React from 'react';
import css from './Main.module.css';
import { useEffect, useState } from "react";
import Title from '../../components/title/Title';


function Main() {
    const [data, setData] = useState([])
    const [newData, setNewData] = useState([])
   

    useEffect(() => {
        fetch('https://60f506732208920017f39ea9.mockapi.io/cards')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setNewData(data)
        })
    }, [])
    
    const search = (obj)=>{
        setNewData(data.filter((item) =>{
        return item.citi.toLowerCase().includes(obj.search.toLowerCase())
        }
    ))
}
// const from = (obj)=>{
//     setNewData(data.filter((item) =>{
//     return item.price.toLowerCase().includes(obj.from.toLowerCase())
//     }
// ))
// }
// const to = (obj)=>{
//     setNewData(data.filter((item) =>{
//     return item.price.toLowerCase().includes(obj.to.toLowerCase())
//     }
// ))
// }
    

    return(
        <div className={css.main}>
            <h1>Лучшие предложения дня</h1>
            <Title search={search} />
             {/* search={from} search={to}/> */}
            {
              newData.map((item) =>  <Card key={item.id} {...item} />)
            }
        </div>  
    );
}

export default Main;