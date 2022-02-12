import React from "react";

export default function Card({background_image, name, genres}){
    return(
        <div>
            <img src = {background_image} alt = 'img not found' width = '200px' height= '250px'/>
            <h3>{name}</h3>
            <h5>{genres}</h5>
        </div>
    );
}