import React from 'react';
import css from './NewsThree.module.css';

function NewsThree(){
    return(
        <div className={css.box}>
            <h1>Цены на недвижимость в Бишкеке</h1>
            <p>Цены на недвижимость формируются исходя из многих аспектов, но основным является покупательская способность. Покупательская способность формируется исходя из внешних факторов, как экономическая ситуация, политическая и финансовая.
            Экономическим факторам относятся влияние экономической политики государства. Тот же государственная ипотека, или ослабление налогов на купле продажу, а так же ослабление пошлин и сборов госорганами на строительство или их усиление и урезание средств, направленных на госипотеку.
            Финансовым фактором является положение на которую не влияет внешний фактор. Это сугубо рыночные колебания, таких как курс иностранных волют, что является следствием девальвации национальной валюты. В КР так же курс доллара США влияет на цены, так как многие операции по купле продаже в оптовом и крупно оптовом объеме осуществляются в долларах США, так же перечисление доходов мигрантов в большей части идут именно в иностранной волюте. Так же большое влияние имеет колебание в финансовом рынке, следствием чего и является положение на рынке, спад или увеличение объема финансирования того или иного направления. Так же кризисные ситуации, которые сильно влияют на все слои рынка в целом.
            Политическое положение так же влияет на цены недвижимости в стране. Так в условиях здоровой конкуренции и роста экономики страны идет стабильный курс развития СК и качества строительства. В условиях неопределенности цены постоянно в динамике, так как идет большой отток капитала, что негативно влияет на покупательскую способность. Так же в условиях неопределенности падает доход населения, и кризис вынуждает многие компании сокращать штат.</p>
            <div className={css.divide}>
                <p className={css.divide_text}>Поделиться:</p>
                <div className={css.logo}>
                    <img src="./img/whatsapp.svg" alt="" />
                    <img src="./img/facebook.svg" alt="" />
                    <img src="./img/telegram.svg" alt="" />
                    <img src="./img/instagram.svg" alt="" />
                    <img src="./img/twitter.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default NewsThree;