import css from './Investors.module.css';
import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function Investors(){
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
                <img className={css.logo} src="./img/man.svg" alt="" />
                <p className={css.text}> С 2011 года я владею многочисленной арендуемой недвижимостью в 4 разных штатах и ​​являюсь клиентом CasHome с 2019 года. Я действительно хочу подчеркнуть здесь высочайшее качество и последовательность всей команды CasHome. Они предоставляют единственное в своем роде решение «под ключ» для отечественных и зарубежных инвесторов. Вы можете доверять тому, что они говорят, их огромному опыту работы, и вы можете доверять их высокой производительности. Довольно редко можно найти компанию, настолько ориентированную на удовлетворение потребностей клиентов, но вы нашли ее в CasHome.</p>
              </div>
              <div>
                <img className={css.logo} src="./img/man2.png" alt="" />
                <p className={css.text}> Я узнал о CasHome совершенно случайно. Почти 3 года спустя я убежден, что команда CasHome появилась в моей жизни с одной целью: помочь создать мой мир, чувствуя себя совершенно комфортно и уверенно с их продуктом и услугами. Желаю вам удачи!!!</p>
              </div>
              <div>
                <img className={css.logo} src="./img/man3.jpg" alt="" />
                <p className={css.text}> Было очень приятно работать с командой CasHome. Что их действительно отличает, так это их регулярный, активный и открытый стиль общения. Я работаю с ними уже больше года. Их последовательность и искреннее партнерство в оказании помощи клиентам в достижении их инвестиционных целей освежают. Надеемся на продолжение этого партнерства!</p>
              </div>
            </Slider>
        </div>
    );
}
export default Investors;