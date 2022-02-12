import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getVideogames, filterCreated, orderByName } from "../actions";
import {Link} from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";


export default function Home(){
    const dispatch = useDispatch(); //para utilizar esa constante e ir despachando mis acciones
    const allVideogames = useSelector((state)=> state.videogames) //traeme en esta constante todo lo que esta en el estado de videogames, la declaro y ya trabajo con esa constante
    const [orden, setOrden] = useState('') //estado local vacio para lo unico q lo uso es para q cuando yo seteo esta pagina me modifique el estado local y se renderice
    const [currentPage, setCurrentPage] = useState(1) //declaro un estado local y le digo siempre voy a arrancar en la primer pagina en 1
    const [videogamesPerPage, setVideogamesPerPage] = useState(15) //declaro otro estado local,cuantos videojuegos quiero por pagina
    const indexOfLastVideogame = currentPage * videogamesPerPage //15
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage //0
    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame) //el slice no incluye la ultima posicion asi que si me trae 15, se va a ir guardando cuales son los videojuegos que hay que renderizar dependiendo dela pagina

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    //con el useEffect voy a trserme del estado los personajes cuando el componente se monta
    useEffect(()=>{
        dispatch(getVideogames()) //despacho la accion
    }, [dispatch]) //segundo parametro del useEffect para que no se me haga un bulce infinito, lo q se inlcuye adentro del arreglo es de lo que depende el componente didMount, es como cuando tenes dependencias de una y otra cosa

function handleClick(e){
e.preventDefault();
dispatch(getVideogames())
}

function handleFilterCreated(e){
    dispatch(filterCreated(e.target.value))  //e.target.value es lo que viene del select, o sea el payload
    setCurrentPage(1)
}

function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);  //xq yo quiero setear la pagina en la primera. set orden lo voy a usar para q cuando yo seteo esta pagina me modifique el estado local y se renderice
    setOrden(`Ordenado ${e.target.value}`)  //a ese estado local modificalo para q desde el front me haga el ordenamiento, lo seteo ordenado de x forma, para que me haga la modificacion del renderizado
}


/*
function handleFilterStatus(e){  //cuando el select se me modifique ejecutame esta funcion
dispatch(filterVideogamesByStatus(e.target.value))   //con el e.target.value accedo al valor de c una de las opciones, el payload va a tomar el valor de cada uno de estos dependiendo lo que toque el usuario
}

<Select onChange = {e => handleFilterStatus(e)} en l parte de abajo donde esta mi select con mis valores le pongo esta funcion

cada vez que seleccionan en mi pagina las opciones me va a setear el e.target.value (me quede en el min 43)
*/

return (
    <div>
        <Link to = "/videogame">Crear videojuego</Link>
        <h1>Mi página de videojuegos</h1>
        <button onClick={e=>{handleClick(e)}}>
            Volver a cargar todos los videojuegos
        </button>
        <div>
            <select onChange={e =>handleSort(e)}>
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
            <select onChange={e => handleFilterCreated(e)}>
                <option value = 'All'>Todos</option>
                <option value = 'created'>Creados</option>
                <option value = 'api'>Existente</option>
            </select>
            <Paginado
            videogamesPerPage={videogamesPerPage}  //props q necesita el componente paginado para funcionar
            allVideogames={allVideogames.length}
            paginado = {paginado}
            />
            {
               currentVideogames && currentVideogames.map(e =>{  //ahora en vez de usar todos los juegos solo voy a mapear sobre una parte del arreglo que serian solo los juegos de esa pagina en la que este
                   return (
                       <fragment className = 'cartas'>
                           <Link to = {'/home/' + e.id}>
                   <Card background_image= {e.background_image} name={e.name} genres={e.genres} key= {e.id}  />
                   </Link>
                   </fragment>
               )})
            }
        </div>
    </div>
)

}