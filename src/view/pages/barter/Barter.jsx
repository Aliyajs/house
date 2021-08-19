import React from 'react';
import css from './Barter.module.css';
function Barter(){
    return(
        <div className={css.container}>
            <h1 className={css.title}>Бартер</h1>
            <div className={css.boxs}>
                <p className={css.text}>
                   Вы можете обменять имеющуюся <br /> недвижимость на новую квартиру. При <br /> обмене жилого имущества, необходимо <br /> предоставить правоустанавливающие и <br /> правоудостоверяющие документы на <br /> передаваемую клиентом недвижимость. <br /> Состояние жилья должно быть не ниже <br /> удовлетворительного. Стоимость вносимого <br /> бартерного жилья определяется <br /> оценщиками от компании.
                </p>
                <div className={css.box}>
                    <h2 className={css.name}>ЖИЛЬЕ</h2>
                    <img className={css.img} src="/img/barter.jpg" alt="" />
                </div>
            </div>
            <div className={css.boxs}>
                <div className={css.box}>
                    <h2 className={css.name}>АВТОМОБИЛИ</h2>
                    <img className={css.img} src="/img/barter2.jpg" alt="" />
                </div>
                <p className={css.text}>
                   Одним из вариантов бартера является обмен легковых автомобилей. При заключении сделки необходимо подготовить и предоставить все документы на автомобиль в соответствии с нормами ДРТС и ВС при ГРС при ПКР. Стоимость и состояние машин определяются оценщиками от компании.
                </p>
            </div>
            <div className={css.boxs}>
                <p className={css.text}>
                    Под тяжелой техникой подразумеваются разные виды наземной авто спецтехники, в частности строительной, дорожной и сельскохозяйственной. Например: грейдеры, экскаваторы, хово-самосвалы, асфальтоукладчики, бульдозеры, погрузчики, подъемные краны и т.п.
                </p>
                <div className={css.box}>
                    <h2 className={css.name}>ТЯЖЕЛАЯ ТЕХНИКА</h2>
                    <img className={css.img} src="/img/barter3.jpg" alt="" />
                </div>
            </div>
            <div className={css.boxs}>
                <div className={css.box}>
                    <h2 className={css.name}>ЗЕМЕЛЬНЫЕ УЧАСТКИ</h2>
                    <img className={css.img} src="/img/barter4.jpg" alt="" />
                </div>
                <p className={css.text}>
                    Земельные участки также являются предметом бартерного обмена. При обмене необходимо предоставить правоустанавливающие и правоудостоверяющие документы документы на землю.
                </p>
            </div>
            <div className={css.boxs}>
                <p className={css.text}>
                В качестве бартерного обмена принимаются и строительные материалы. Качество и стоимость которых определяются оценщиками от компании.
                </p>
                <div className={css.box}>
                    <h2 className={css.name}>СТРОИТЕЛЬНЫЕ МАТЕРИАЛЫ</h2>
                    <img className={css.img} src="/img/barter5.jpg" alt="" />
                </div>
            </div>
            <div className={css.boxs}>
                <div className={css.box}>
                    <h2 className={css.name}>СУБПОДРЯДНЫЕ РАБОТЫ</h2>
                    <img className={css.img} src="/img/barter6.jpg" alt="" />
                </div>
                <p className={css.text}>
                   Под субподрядными работами подразумевается возможность клиента предоставить услуги строительного подряда для компании в качестве бартера за приобретаемую квартиру.
                </p>
            </div>
        </div>
    );
}
export default Barter;