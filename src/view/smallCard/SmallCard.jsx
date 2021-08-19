import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SliderMap from '../sliderMap/SliderMap';
import css from './SmallCard.module.css';
import { useParams } from "react-router";

export default function SmallCard (props) {
    
    const [slider, setSlider] = useState([])
    let { id } = useParams();
    useEffect(() => {
      fetch("https://60f506732208920017f39ea9.mockapi.io/cart")
      .then((res) => res.json())
      .then((data) => {
        setSlider(data)
        console.log(data)
      })
  }, [])
    return (
        <div className={css.tema} >
            <p className={css.sale}>{props.title}</p>
            <div className={css.container}>
                <div className={css.smallcard}>
                   <div className={css.info}>
                        <p>Где: {props.where}</p>
                        <p>{props.place}</p>
                        <p>{props.room}</p>
                        <p>{props.floor}</p>
                        <p>{props.square}</p>
                        <p>Цена: <b>{props.price}</b></p>
                        <p>{props.material}</p>
                        <p>{props.window}</p>
                        <p>{props.view}</p>
                    </div>
                </div>
                {
                   slider.map((item) =>  <SliderMap key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}