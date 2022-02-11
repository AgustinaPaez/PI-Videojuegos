import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogames } from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";


export default function Home(){
    const dispatch = useDispatch(); //para utilizar esa constante e ir despachando mis acciones
    const allVideogames = useSelector((state)=> state.videogames) //traeme en esta constante todo lo que esta en el estado de videogames, la declaro y ya trabajo con esa constante

    //con el useEffect voy a trserme del estado los personajes cuando el componente se monta
    useEffect(()=>{
        dispatch(getVideogames()) //despacho la accion
    }, [dispatch]) //segundo parametro del useEffect para que no se me haga un bulce infinito, lo q se inlcuye adentro del arreglo es de lo que depende el componente didMount, es como cuando tenes dependencias de una y otra cosa

function handleClick(e){
e.preventDefault();
dispatch(getVideogames())
}
return (
    <div>
        <Link to = "/videogame">Crear videojuego</Link>
        <h1>Mi página de videojuegos</h1>
        <button onClick={e=>{handleClick(e)}}>
            Volver a cargar todos los videojuegos
        </button>
        <div>
            <select>
                <option value = 'ning'>Ninguno</option>
                <option value = 'asc'>A-Z</option>
                <option value = 'desc'>Z-A</option>
            </select>
            <select>
                <option value = 'ning'>Ninguno</option>
                <option value = 'asc'>Alto</option>
                <option value = 'desc'>Bajo</option>
            </select>
            <select>
                <option value = 'All'>Todos</option>
                <option value = 'Unknow'>Desconocido</option>
            </select>
            <select>
                <option value = 'All'>Todos</option>
                <option value = 'created'>Creados</option>
                <option value = 'api'>Existente</option>
            </select>
            {
               allVideogames && allVideogames.map(e =>{
                   return (
                       <fragment className = 'cartas'>
                           <Link to = {'/home/' + e.id}>
                   <Card name={e.name} genres={e.genres} background_image= {e.background_image} key= {e.id}  />
                   </Link>
                   </fragment>
               )})
            }
        </div>
    </div>
)

}