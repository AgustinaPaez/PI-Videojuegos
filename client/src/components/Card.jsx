import React from "react";

export default function Card({name, genres, background_image}){
    return(
        <div>
            <h3>{name}</h3>
            <h5>{genres}</h5>
            <img src = {background_image} alt = 'img not found' width = '200px' height= '250px'/>
        </div>
    );
}