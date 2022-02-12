import React from "react";

export default function Paginado({videogamesPerPage, allVideogames, paginado}){  //me traigo por props el estado de los videogames q quiero x pag, todos los videojuegos y la cons paginado
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) { //redondea para arriba, esto me da las paginas q necesito en base a cuantos personajes tengo y quiero x pag
        pageNumbers.push(i)  //push i + 1 otra opcion
    }
    return (
        <div className="container">
        <div className="paginado">
                {pageNumbers && pageNumbers.map(e =>( //devolveme cada uno de los numeros que te devuelva el paginado //number es cada una de las paginas q necesito para renderizar todos mis videojuegos
                     <a key= {e} onClick={() => paginado(e)}>{e}</a>  
                ))}
                </div>
            </div>
    )
}

//  return(
//     <nav>
//     <ul className = 'paginado'>
//     {pageNumbers && pageNumbers.map(e =>(
//         <li className = 'e' key = {e}>
//         <a onClick={()=>paginado(e)} >{e}</a>
//         </li>
//     ))}
// </ul>
// </nav>
//  )
//     }  
