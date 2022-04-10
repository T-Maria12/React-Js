import React from "react";
import PokeCard from "./PokeCard";
import "./Pokedex.css";

//index of pokemon (individual card)

function Pokedex(props){
 let winMessage =null;
 if(props.isWinner){
     winMessage=<p className="Pokedex-winner">THIS HAND WINS !</p>;
 }

 return (
     <div className="Pokedex">
         <h2 className="Pokedex-title">Pokedex</h2>
         <div className="Pokedex-card">
             {props.pokemon.map(p=>(
                 <PokeCard
                 id={p.id}
                 name={p.name}
                 type={p.type}
                 export={p.base_experience}
                 />
             ))}
         </div>
         <h4>Total experience:{props.exp}</h4>
         {winMessage}
     </div>
 );
}

export default Pokedex;