import React from 'react';
import css from './AboutUs.module.css'

function AboutUs() {
    return (
        <div className={css.about}>
            <h1>Агентство недвижимости CasHome</h1>
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
                <div className={css.box}>
                    <img className={css.img} src="./img/business.jpg" alt="" />
                    <div className={css.boxs}>
                        <h3 className={css.name}>Ишенова Алия Жыргалбековна</h3>
                        <p className={css.test}>Образование: высшее юридическое (Кыргызский <br /> государственный национальный университет). Выпускник <br /> Кыргызского финансово-промышленного университета «Синергия» <br /> по программе "Executive Master of Business Administration (ЕМВА). <br /> Выпускник Школы владельцев бизнеса «Высоцкий консалтинг».</p>
                    </div>
                </div>
            </div>
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
                        <p className={css.tell}>Улица Исанова 5/1 БЦ CasHome </p>
                    </div>
                </div>
                <img className={css.url} src="./img/holl.jpg" alt="" />
            </div>
        </div>
    );
}


export default AboutUs;