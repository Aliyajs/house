import React from "react";
import css from "./Help.module.css";

function Help() {
  return (
    <div className={css.help}>
      <h3 className={css.helps}>Помощь</h3>
      <div className={css.register}>
        <p className={css.reg}>Как зарегистрироваться?</p>
        <p className={css.text}>
          Зайдите на страницу входа и укажите адрес электронной почты или номер
          телефона. Нажмите “Продолжить” и вам на адрес электронной почты или на
          указанный телефон будет отправлен код подтверждения, который
          необходимо будет ввести в появившемся поле.Адрес электронной почты или
          номер телефона в дальнейшем будут использоваться как ваш логин входа в
          личный кабинет.
        </p>
      </div>
      <hr className={css.line} />
      <div className={css.auto}>
        <p className={css.reg}>
          Какие преимумещества личного кабинета и авторизации?
        </p>
        <p className={css.text}>
          С помощью личного кабинета авторизованный пользователь может:
          просматривать свои объявления; редактировать объявления, бесплатно
          поднимать объявления вверх, удалять объявления, Если для авторизации
          на сайте и в приложениях используется один и тот же логин, происходит
          синхронизация: избранных объявлений, добавленных объявлений.
        </p>
      </div>
      <hr className={css.line}/>
      <div className={css.regulation}>
        <p className={css.reg}>Как добавить объявление и есть ли правила?</p>
        <p className={css.text}>
          Для добавления объявления необходимо нажать кнопку Добавить объявление
          и заполнить все обязательные поля. Мы внимательно следим за качеством
          опубликованных у нас на ресурсе объявлений и осуществляем их
          регулярную проверку. Следуйте нашим правилам и рекомендациям,
          необходимым для сохранения в нашей базе: Вся указанная в объявлении
          информация должна соответствовать действительности. Имя и контактные
          данные должны принадлежать вам — не размещайте объявления за других
          людей. В объявлении должен быть указан действующий номер телефона,
          доступный для входящих звонков. Одно и то же объявление не должно
          размещаться несколько раз. Фотографии в объявлении должны
          соответствовать продаваемой недвижимости. Содержание объявления должно
          соответствовать рубрике, в которую оно подаётся. Модераторы имеют
          право удалить объявление, если оно не соответствует правилам
          публикации объявлений в подаваемую рубрику. В поле «Город» должен быть
          указан город, в котором фактически находится предложение (товар).
        </p>
      </div>
      <div>
        <hr className={css.line} />
        <p className={css.reg}>Как удалить объявление</p>
        <p className={css.text}>
          Удалить объявление можно через Личный кабинет, зайдя под логином,
          который Вы указывали при подаче объявления. Также удалить объявление
          можно по ссылке, отправленной на электронный адрес, указанный при
          подаче объявления.
        </p>
      </div>
      <div>
        <hr className={css.line}/>
        <p className={css.reg}>Почему я не могу найти свое объявление</p>
        <p className={css.text}>
          Т.к. мы внимательно следим за качеством опубликованных у нас на
          ресурсе объявлений и осуществляем их регулярную проверку, то ваше
          объявление скорее всего было удалено модератором в связи с
          обнаруженными нарушениями наших правил.
        </p>
      </div>
      <div>
        <hr className={css.line}/>
        <p className={css.reg}>Почему я не могу добавить фото к обьявлению</p>
        <p className={css.text}>
          Возможно, у вас недостаточное качество интернета. Попробуйте,
          пожалуйста, воспользоваться другим интернет каналом. Также, если вы
          отправите нам фото на email support@CasHome, мы добавим его к Вашему
          объявлению.
        </p>
      </div>
      <hr className={css.line}/>
    </div>
  );
}
export default Help;