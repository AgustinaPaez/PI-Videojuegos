import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, background_image, name, genres}){
    return(
        <div>
            <Link to = {'/home/' + id} >
            <img src = {background_image} alt = 'img not found' width = '200px' height= '250px'/>
            <h3>{name}</h3>
            </Link>
            <h5>{genres}</h5>
        </div>
    );
}