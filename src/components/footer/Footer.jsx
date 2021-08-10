import React from 'react';
import css from './Footer.module.css';

function Footer() {
    return (
        <footer className={css.footer}>
            <div className={css.footer_box}>
                <div className={css.container}>
                    <div className={css.box}>
                       <img src="./img/logo.svg"/>
                       <h1 className={css.text}>RP</h1>
                       <p className={css.text}>company</p>
                    </div>
                    <p>RP - is an online service for the sale <br />and rental of real estate in Bishkek and <br />Kyrgyzstan. We help to buy or rent apartments, <br />houses, offices all over the country. Find the best <br />options, quickly sell or rent your property with us! </p>
                    <div>
                       <h3 className={css.link}>SOCIAL MEDIA</h3>
                       <a href="#"><img src="./img/whatsapp.svg"className={css.img}/></a>
                       <a target="_blank" href="https://www.instagram.com/house_kg/?hl=ru"><img src="./img/instagram.svg"className={css.img}/></a>
                       <a target="_blank" href="https://telegramchannels.me/ru/channels/deep_housesity"><img src="./img/telegram.svg"className={css.img}/></a>
                       <a target="_blank" href="https://www.youtube.com/channel/UCvk3xGUIThJMfKwZyNI8Krw"><img src="./img/youtube.svg"className={css.img}/></a>
                       <a target="_blank" href="https://www.facebook.com/house.in.kg/"><img src="./img/facebook.svg"className={css.img}/></a>
                    </div>
                </div>
                <div className={css.name}>
                    <div>
                        <h3>PROPERTY</h3>
                        <ul className={css.list}>
                            <li>House</li>
                            <li>Apartment</li>
                            <li>Vila</li>
                        </ul>
                    </div>
                    <div className={css.property}>
                        <h3>RESOURCES</h3>
                        <ul className={css.list}>
                            <li>Articles</li>
                            <li>Resources</li>
                            <li>Help Center</li>
                            <li>Market Reports</li>
                        </ul>
                    </div>
                    <div className={css.property}>
                        <h3>SUPPORT</h3>
                        <ul className={css.list}>
                            <li>Privacy & Policy</li>
                            <li>Terms & Condition</li>
                            <li>Support System</li>
                        </ul>
                    </div>
                    <div className={css.property}>
                        <h3>Contact us</h3>
                        <p className={css.list}>Lorem ipsum dolor sit amet <br />consectetur adipiscin.</p>
                        <div className={css.flex}>
                           <input type="text" placeholder="Email address" className={css.input}/>
                           <button className={css.btn}>Sent</button>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className={css.end}>Copyright ©  2019-2021 RP company. All right reserved</h3>
        </footer>
        
    );
}

export default Footer;