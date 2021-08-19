import React from 'react';
import css from './AboutUs.module.css'
import { YMaps, Map, Placemark } from "react-yandex-maps";

function AboutUs() {
    return (
        <div className={css.about}>
            <h1 className={css.about__title}>Агентство недвижимости CasHome</h1>
            <div className={css.container}>
                <img className={css.image} src="./img/about.jpg"/>
                <p className={css.text}>Агентство недвижимости
                <b> "CasHome"</b> на рынке с 2019 года
                3 года <br /> безупречной работы и более 10000 благодарных клиентов.
                <br /> Были разные времена,но наша компания осталась на плаву и <br /> доказала свою эффективность на рынке недвижимости Кыргызстана!
                <br /> Команда опытных грамотных а самое главное учитывающих потребностей клиентов!!!
                Работая с нами вы получите не только выгоду в финансовом <br /> плане,но и поддержку и дружбу на долгие годы. Мы не обещаем на словах,а делаем все на деле и доказываем свой профессионализм.
                Продаем <br /> все что не продается и находим лучшее!!!</p>
            </div>
            <div className={css.obj}>
                <h2 className={css.title}>Наши объекты</h2>
                <div className={css.obj__first}>
                    <div>
                        <img className={css.obj__img} src="/img/floor.jpg" alt="" />
                    </div>
                    <div className={css.obj__text}>
                        <h3 className={css.title__text}>New City</h3>
                        <p>Жилой комплекс New City представляет собой комбинацию надежности, практичности и современных технологий. Выполненный в стиле hi-tech он подойдет для динамичных и амбициозных людей, чей ритм жизни стремителен.</p>
                        <p><b>Общая площадь:</b> 50 000 кв. м</p>
                        <p><b>Количество квартир: </b> 1000</p>
                        <p><b>Ожидаемая дата завершения 1-го <br /> этапа строительства: </b>4 квартал 2021</p>
                    </div>
                </div>
                <div className={css.obj__two}>
                    <div className={css.obj__text}>
                        <h3 className={css.title__text}>Art city</h3>
                        <p>Жилой комплекс Art City — это жилье комфорт класса, отвечающее всем современным требованиям безопасности, практичности и удобства. Квартиры в нем спланированы так, что каждый квадратный метр используется рационально.</p>
                        <p><b>Общая площадь:</b> 55 000 кв. м</p>
                        <p><b>Количество квартир: </b> 1050</p>
                        <p><b>Ожидаемая дата завершения <br /> 1-го этапа строительства: </b> 3 квартал 2022</p>
                    </div>
                    <div>
                        <img className={css.obj__img} src="/img/floor2.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className={css.container_box}>
                <h2 className={css.main}>Команда</h2>
                <h4 className={css.work}>Основатель и владелец</h4>
                <div className={css.box}>
                    <img className={css.img} src="./img/wonen.jpg" alt="" />
                    <div className={css.boxs}>
                        <h3 className={css.name}>Кадырбекова Жамиля Нурлановна</h3>
                        <p className={css.test}>Образование: высшее юридическое (Кыргызский <br /> государственный национальный университет). Выпускник <br /> Кыргызского финансово-промышленного университета «Синергия» <br /> по программе "Executive Master of Business Administration (ЕМВА). <br /> Выпускник Школы владельцев бизнеса «Высоцкий консалтинг».</p>
                    </div>
                </div>
                <hr />
                <div className={css.box}>
                    <img className={css.img} src="./img/business.jpg" alt="" />
                    <div className={css.boxs}>
                        <h3 className={css.name}>Ишенова Алия Жыргалбековна</h3>
                        <p className={css.test}>Образование: высшее юридическое (Кыргызский <br /> государственный национальный университет). Выпускник <br /> Кыргызского финансово-промышленного университета «Синергия» <br /> по программе "Executive Master of Business Administration (ЕМВА). <br /> Выпускник Школы владельцев бизнеса «Высоцкий консалтинг».</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={css.container_react}>
                <div className={css.react}>
                    <h2 className={css.number}>Телефон:</h2>
                    <div className={css.wrapper}>
                        <img className={css.images} src="./img/phone.svg" alt="" />
                        <p className={css.tell}>+(996) 555 34-57-94 </p>
                    </div>
                    <h2 className={css.number}>Почта:</h2>
                    <div className={css.wrapper}>
                        <img className={css.images} src="./img/email.svg" alt="" />
                        <p className={css.tell}>cas_home-2@mail.ru</p>
                    </div>
                    <h2 className={css.number}>Адрес:</h2>
                    <div className={css.wrapper}>
                        <img className={css.images} src="./img/placeholder.svg" alt="" />
                        <p className={css.tell}>Улица Исанова 10/3 БЦ CasHome </p>
                    </div>
                </div>
                <img className={css.url} src="./img/holl.jpg" alt="" />
            </div>
            <hr />
            <div className={css.map}>
                <h3 className={css.our__offis}>Наш офис</h3>
               <YMaps>
                  <Map height={"100%"} width={"100%"} defaultState={{ center: [42.8667, 74.5667], zoom: 12 }}>
                    <Placemark geometry={[42.884010 , 74.592373]} />
                  </Map>
               </YMaps>
            </div>
        </div>
    );
}


export default AboutUs;