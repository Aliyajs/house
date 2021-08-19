import React from 'react';
import css from './SliderMap.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

function SliderMap(props){
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
                       <img src={props.image} alt="" />
                    </div>
                    <div>
                      <img src={props.imageUrl} alt="" />
                    </div>
                    <div>
                       <img src={props.images} alt="" />
                    </div>
                    <div>
                       <img src={props.img} alt="" />
                    </div>
                    <div>
                       <img src={props.url} alt="" />
                    </div>
                    <div>
                       <img src={props.picture} alt="" />
                    </div>               
            </Slider>
        </div>
    );
}
export default SliderMap;