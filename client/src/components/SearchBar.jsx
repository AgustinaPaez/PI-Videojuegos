import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../actions";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name) //para que veamos como se va modificando
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(name)) //este name va a ser mi estado local(loo q esta tipeando el usuario) esto le  va a llegar a mi action q va a llamar al back y le va a pasar esto
    
    }

return(
    <div>
        <input
            type = 'text'
            placeholder="Buscar..."
            onChange={(e)=> handleInputChange(e)}
        />
        <button type = 'submit' onClick= {(e)=> handleSubmit(e)}>Buscar por Nombre</button>
    </div>
)

}