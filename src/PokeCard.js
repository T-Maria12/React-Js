import React from 'react';
import './PokeCard.css';


const POKE_API ='https://raw.githubusercontent.com/' +
'PokeAPI/sprites/master/sprites/pokemon/';


//Individual pokemon card

function PokeCard(props){
    let imgSrc=`${POKE_API}${props.id}.png`;

    return(
        <div className="PokeCard">
            <div className="PokeCard-title">{props.name}</div>
            <img className="PokeCard-image" src={imgSrc} />
            <div className="PokeCard-Data">Type:{props.type}</div>
            <div className="PokeCard-Data">EXP:{props.exp}</div>
        </div>
    );
}
 export default PokeCard;