import React from 'react';
import css from './Articles.module.css';
function Articles(){
    return(
        <div className={css.container}>
            <h1 className={css.wraper}>Почему с нами лучше?</h1>
            <div className={css.box}>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/icon.svg" alt="" />
                    <h3 className={css.title}>У вас будет <br /> большой выбор</h3>
                    <p className={css.text}>Тщательно отбираем базу <br /> объектов, проверяем документы на юридическую чистоту.</p>
                </div>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/icon2.svg" alt="" />
                    <h3 className={css.title}>Юридическое сопровождение</h3>
                    <p className={css.text}>Оказываем бесплатно сопровождение во время сделки и после регистрации прав собственности.</p>
                </div>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/icon3.svg" alt="" />
                    <h3 className={css.title}>Платите за результат</h3>
                    <p className={css.text}>Все консультации и сервисы компании бесплатны. Вы платите только после сделки.</p>
                </div>
                <div className={css.boxs}>
                    <img className={css.img} src="./img/icon4.svg" alt="" />
                    <h3 className={css.title}>Всё будет готово для сделки</h3>
                    <p className={css.text}>Экономим ваше время: берём всю рутину на себя, вам не нужно тратить время, чтобы разбираться.</p>
                </div>
            </div>
        </div>
    );
}
export default Articles;
