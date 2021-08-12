import React from "react";
import css from "./CardMap.module.css";
// import { YMaps, Map } from "react-yandex-maps";

function CardMap() {
  return (
    <div className={css.cardmap}>
      <div className={css.card}></div>
      <div className={css.map}>
        {/* <YMaps>
          <div>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </div>
        </YMaps> */}
      </div>
    </div>
  );
}
export default CardMap;
