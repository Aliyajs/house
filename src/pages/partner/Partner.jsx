import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './Partner.module.css'



export default function Partner(){
    const settings = {
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return(
        <div>
            <Slider {...settings} className={css.slider}>
          <div>
            <div  className={css.box}>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner.jpg" />
                    <h2 className={css.text}>Строй Лидер</h2>
                    <p className={css.test}>8 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner2.jpg" />
                    <h2 className={css.text}>M&A Group</h2>
                    <p className={css.test}>94 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner3.jpg" />
                    <h2 className={css.text}>My Home</h2>
                    <p className={css.test}>52 обьявлений</p>
                </div>
            </div>
          </div>
          <div>
          <div className={css.box}>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner4.jpg" />
                    <h2 className={css.text}>Мой Дом KG</h2>
                    <p className={css.test}>23 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner5.jpg" />
                    <h2 className={css.text}>Ventura</h2>
                    <p className={css.test}>3 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner6.jpg" />
                    <h2 className={css.text}>Alim Capital</h2>
                    <p className={css.test}>10 обьявлений</p>
                </div>
            </div>
           </div>
          <div>
          <div className={css.box}>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner7.jpg" />
                    <h2 className={css.text}>NEDVIJKA</h2>
                    <p className={css.test}>13 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner8.jpg" />
                    <h2 className={css.text}>Kvadrat Invest</h2>
                    <p className={css.test}>37 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner9.jpg" />
                    <h2 className={css.text}>Этажи</h2>
                    <p className={css.test}>294 обьявлений</p>
                </div>
            </div>
          </div>
          <div>
          <div className={css.box}>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner10.jpg" />
                    <h2 className={css.text}>Моя Столица</h2>
                    <p className={css.test}>114 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner11.jpg" />
                    <h2 className={css.text}>Full Mobili</h2>
                    <p className={css.test}>91 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner12.jpg" />
                    <h2 className={css.text}>Bishkek Citi Group</h2>
                    <p className={css.test}>294 обьявлений</p>
                </div>
            </div>
          </div>
          <div>
          <div className={css.box}>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner13.jpg" />
                    <h2 className={css.text}>Jakomo</h2>
                    <p className={css.test}>648 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner14.png" />
                    <h2 className={css.text}>American Home</h2>
                    <p className={css.test}>87 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner15.png" />
                    <h2 className={css.text}>Limited Company</h2>
                    <p className={css.test}>111 обьявлений</p>
                </div>
            </div>
          </div>
          
        </Slider>
        </div>
    );
}