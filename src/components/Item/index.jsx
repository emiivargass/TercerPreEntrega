import './item.css';
import React from 'react';

///constante como componente

const Item = ({info}) =>{

    return(
        <a href='' className="zapas">
            <img src={info.image} alt='imagen no encontrada'/>
            <p>{info.title}</p>
        </a>
    );
}

export default Item;