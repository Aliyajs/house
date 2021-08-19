import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import css from './Partners.module.css'

export default function Partners(){
    const settings = {
        autoplaySpeed: 1100,
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
                    <img className={css.img} src="./img/partner13.png" />
                    <h2 className={css.text}>Jakomo</h2>
                    <p className={css.test}>648 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner14.svg" />
                    <h2 className={css.text}>American Home</h2>
                    <p className={css.test}>87 обьявлений</p>
                </div>
                <div className={css.container}>
                    <img className={css.img} src="./img/partner15.jpg" />
                    <h2 className={css.text}>Limited Company</h2>
                    <p className={css.test}>111 обьявлений</p>
                </div>
            </div>
          </div>
        </Slider>
        <h1 className={css.name}>Партнерские программы</h1>
            <div className={css.boxs}>
                <div className={css.wraper}>
                    <h3 className={css.title}>Агентская программа</h3>
                    <p className={css.tema}>Рекомендация недвижимости компании CasHome <br /> дает возможность потенциальным клиентам <br /> получить бонус. Программа действует только при <br /> успешной сделке. <br />
                     Это позволяет заработать 2 способами: наличными <br /> денежными средствами до $ 3000 или баллами на <br /> приобретение квартиры.</p>
                </div>
                <img className={css.images} src="./img/investors.jpg" alt="" />
            </div>
            <div className={css.boxs}>
            <img className={css.images} src="./img/investors2.jpg" alt="" />
            <div className={css.wrapper}>
                <h3 className={css.title}>Программа «Купим участки»</h3>
                <p className={css.tema}>Продажа своего участка или рекомендация продаваемой площади позволяет заработать 1-3% от стоимости участка при запуске строительства или квадратные метры в строящемся объекте.</p>
            </div>
            </div>
            <div className={css.boxs}>
                <div className={css.wraper}>
                    <h3 className={css.title}>Программа «Приведи инвестора»</h3>
                    <p className={css.tema}>Позволяет заработать от 1% — 3% от <br /> инвестиционного вклада.</p>
                </div>
                <img className={css.images} src="./img/investors3.jpg" alt="" />
            </div>
        </div>
    );
}