import { Link } from "react-router-dom";
import React from "react";
import css from "./Card.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function Card(props) {

  const settings = {
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={css.container}>
      <div className={css.boxs}>
        <div className={css.card}>
          <Slider {...settings} className={css.slider}>
            <div>
              <img className={css.card__img} src={props.imageUrl} alt="" />
            </div>
            <div>
              <img className={css.card__img} src={props.image} alt="" />
            </div>
            <div>
              <img className={css.card__img} src={props.images} alt="" />
            </div>
          </Slider>
          <div className={css.card__text}>
            <p>{props.title}</p>
            <p>${props.price}</p>
            <p>{props.holl}</p>
            <p>{props.citi}</p>
          </div>
            <Link className={css.deteil} to={`/cardmap/${props.id}`}>
              <p>Подробнее &rarr; </p>
            </Link>
          </div>
      </div>
    </div>
  );
}
export default Card;
