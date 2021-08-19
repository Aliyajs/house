import React from "react";
import css from "./CardMap.module.css";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import SmallCard from "../smallCard/SmallCard";
import { useState, useEffect} from 'react';
import { useParams } from "react-router";


function CardMap(props) {
  const [shop, setShop] = useState(null)
  let { id } = useParams();

  useEffect(() => {
      fetch(`https://60f502922208920017f39e96.mockapi.io/shop/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setShop(data)
      })
  }, [])

  return (
    <div className={css.cardmap}>
      <div className={css.card}>
        {
          shop ? <SmallCard {...shop} /> : null
        } 
      </div>
      <div className={css.map}>
        <YMaps>
          <Map height={"100%"} width={"100%"} defaultState={{ center: [42.8667, 74.5667], zoom: 6 }}>
            {
             shop ? <Placemark geometry={[shop?.lng, shop?.ltd]} /> : null
            }
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default CardMap;
