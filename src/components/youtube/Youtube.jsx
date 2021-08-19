import React from 'react';
import css from './Youtube.module.css';

function Youtube(){
    return(
        <div className={css.container}>
            <iframe width="950" height="550" src="https://www.youtube.com/embed/xtA_oQyHZ7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}
export default Youtube;