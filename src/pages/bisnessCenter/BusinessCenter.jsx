import React from 'react';
import css from './BusinessCenter.module.css';
import Slider from 'react-slick';

export default function BusinessCenter(){
    const settings = {
        autoplaySpeed: 1100,
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <div className={css.container}>
            <h1 className={css.title}>О БИЗНЕС-ЦЕНТРЕ</h1>
            <hr />
            <p className={css.text}>Бизнес-центр класса А уникальный по своему месторасположению и характеристикам, объект представляет собой современное 20-ти этажное здание. В непосредственной близости от Бизнес-центра находится большинство самых значимых учреждений города: Дом правительства, Мэрия г. Бишкек, несколько Министерств. Близость банков, торговых центров, ресторанов и других общественных учреждений являются преимуществом. Доступность к инфраструктуре городского транспорта делают местоположение центра удобным как для подъезда на автомобиле, так и на общественном транспорте.</p>
            <div className={css.services}>
                <div>
                  <img className={css.image} src="/img/arrow.png" alt="" />
                  <p className={css.name}>ПРЕДЛАГАЕМ ВАМ ОФИСНЫЕ <br /> ПОМЕЩЕНИЯ ОТ 100 М2</p>
                </div>
                <div>
                    <img className={css.image} src="/img/settingHome.png" alt="" />
                    <p className={css.name}>ОТДЕЛКА ОФИСОВ – ИЗ <br /> ВЫСОКОКАЧЕСТВЕННЫХ МАТЕРИАЛОВ</p>
                </div>
                <div>
                    <img className={css.image} src="/img/time.png" alt="" />
                    <p className={css.name}>РЕЖИМ РАБОТЫ БЦ 24 ЧАСА В СУТКИ, 7 <br /> ДНЕЙ В НЕДЕЛЮ</p>
                </div>
                <div>
                    <img className={css.image} src="/img/safety.png" alt="" />
                    <p className={css.name}>СИСТЕМА БЕЗОПАСНОСТИ</p>
                </div>
                <div>
                    <img className={css.image} src="/img/coffee.png" alt="" />
                    <p className={css.name}>КОМФОРТНЫЕ УСЛОВИЯ ДЛЯ <br /> КЛИЕНТОВ</p>
                </div>
                <div>
                    <img className={css.image} src="/img/parking.png" alt="" />
                    <p className={css.name}>БОЛЬШОЙ ПАРКИНГ</p>
                </div>
                <div>
                    <img className={css.image} src="/img/elevator.png" alt="" />
                    <p className={css.name}>15 БЕСШУМНЫХ СКОРОСТНЫХ <br /> ЛИФТОВ</p>
                </div>
            </div>
            <div >
            <Slider {...settings} className={css.slider}>
                <div className={css.build}>
                    <img src="/img/hall.jpg" alt="" />
                    <div classNmae={css.slider__text}>
                       <h3>Современное офисное здание класса А</h3>
                       <p>Сочетание функциональности и новейших инженерных достижений</p>
                       <p>Идеальные условия для комфортной работы</p>
                       <p>Офисные помещения от 50 м2 – до 10000 м2</p>
                    </div>
                </div>
                <div>
                    <img src="/img/dinner12.jpg" alt="" />
                    <div>
                        <h3>Аренда от собственника</h3>
                        <p>Современные инженерные технологии для Вашего комфорта</p>
                        <p>20 этажей</p>
                        <p>Отделка высокого качества</p>
                        <p>Высота потолков – 4 метра</p>
                        <p>Офисные помещения от 30 м2 – до 1000 м2</p>
                    </div>
                </div>
                <div>
                   <img src="/img/dinner5.jpg" alt="" />
                   <div>
                      <h3>Комфорт для бизнеса</h3>
                      <p>Деловой центр оснащен автоматизированной системой климат – контроля, поддерживающей микроклимат во всех внутренних помещениях:</p>
                        <p>Автоматическая вентиляция</p>
                        <p>Контроль уровня СО2</p>
                        <p>Контроль влажности</p>
                        <p>Поддержание заданной температуры</p>
                        <p>Офисные помещения от 50 м2 – до 10000 м2</p>
                    </div>
                </div>
                <div>
                    <img src="/img/dinner9.jpg" alt="" />
                    <div>
                       <h3>Свобода мысли</h3>
                       <p>Офисные помещения представляют собой открытые пространства, что дает возможность арендаторам организовать рабочие места согласно своим бизнес-потребностям. Размер офиса может варьироваться от 30 м2 – до 1000 м2.</p>
                    </div>
                </div>
                <div>
                    <img src="/img/dinner.jpg" alt="" />
                    <div>
                      <h3>Экономия времени</h3>
                      <p>Бизнес центр оборудован скоростными лифтами от производителя Sigma и Otis, существенное сокращение времени их ожидания обеспечивается автоматической системой управления пассажиропотоком. Размер офиса может варьироваться от 50 м2 – до 10000 м2.</p>
                    </div>
                </div>
            </Slider>
            </div>
            <div>
                <h2 className={css.main}>КОНФЕРЕНЦ-ЗАЛЫ</h2>
                <hr />
                <p className={css.text}>Конференц-залы бизнес-центра «CasCenter Tower B» – пространства взаимовыгодной деловой коммуникации, включающие в себя полный спектр услуг по организации и проведению бизнес-форумов, семинаров, конференций различного формата и направления. Вместимость залов до 500 человек</p>
                <p className={css.text}>Для вашего удобства конференц-залы оснащены современным высокотехнологическим оборудованием:</p>
                <div className={css.services__two}>
                  <div>
                      <img className={css.image} src="/img/server.png" alt="" />
                      <p className={css.name}>СКОРОСТНОЙ ИНТЕРНЕТ</p>
                  </div>
                  <div>
                      <img className={css.image} src="/img/4k.png" alt="" />
                      <p className={css.name}>ИНТЕРАКТИВНАЯ ПАНЕЛЬ С ДИАГОНАЛЬЮ <br /> 96 ДЮЙМОВ, КАЧЕСТВОМ ИЗОБРАЖЕНИЯ <br /> UHD 4K</p>
                  </div>
                  <div>
                      <img className={css.image} src="/img/videoCam.png" alt="" />
                      <p className={css.name}>PTZ-КАМЕРА С ФУНКЦИЕЙ <br /> АВТОМАТИЧЕСКОЙ НАВОДКИ НА СПИКЕРА</p>
                  </div>
                  <div>
                      <img className={css.image} src="/img/television.png" alt="" />
                      <p className={css.name}>5 ДУБЛИРУЮЩИХ ЭКРАНА C <br /> ДИАГОНАЛЬЮ 65 ДЮЙМОВ</p>
                  </div>
                  <div>
                      <img className={css.image} src="/img/music.png" alt="" />
                      <p className={css.name}>БЕСПРОВОДНАЯ РАДИОСИСТЕМА С <br /> РУЧНЫМ МИКРОФОНОМ</p>
                  </div>
                  <div>
                      <img className={css.image} src="/img/videoChat.png" alt="" />
                      <p className={css.name}>ОБЕСПЕЧЕНИЕ ДВУСТОРОННЕЙ АУДИО И <br /> ВИДЕОСВЯЗИ МЕЖДУ ДВУМЯ И БОЛЕЕ <br /> УДАЛЕННЫМИ ОБЪЕКТАМИ <br /> ПОСРЕДСТВОМ ТЕЛЕМОСТА – ДАЕТ <br /> ВОЗМОЖНОСТЬ ПРОВЕСТИ ПЕРЕГОВОРЫ <br /> НА ВЫСОКОМ УРОВНЕ</p>
                  </div>
                </div>
            </div>
            <div className={css.conference}>
                <img className={css.hall} src="/img/hall.jpg" alt="" />
                <img className={css.hall} src="/img/hall2.jpg" alt="" />
            </div>
            <div className={css.offis}>
                <h3 className={css.title}>ГАЛЕРЕЯ</h3>
                <hr />
                <div className={css.wrapper}>
                  <img className={css.wrapper_img} src="/img/dinner.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner2.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner3.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner4.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner5.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner6.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner7.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner8.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner9.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner10.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner11.jpg" alt="" />
                  <img className={css.wrapper_img} src="/img/dinner12.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}