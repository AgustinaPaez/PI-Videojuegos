import axios from "axios";

export function getVideogames() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_VIDEOGAMES",
      payload: json.data,
    });
  };
}
export function filterCreated(payload) {
  //el payload es el value de la opcion que vos elijas
  return {
    type: "FILTER_CREATED",
    payload,
  };
}
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}
/* //la accion es la funcion a la que le voy a pasar el payload(el payload puede ser cualquier cosa, lo que yo le mando del componente)
export function filterVideogamesByStatus(payload){  //este me sirve para practicar nomas xqno tenemos esto, el payload es el value del input, del select
  console.log(payload)  //para verlo
  return {
    type: 'FILTER_BY_STATUS ', // declaro el type q me sirve para despues acceder en el reducer
    payload    //y le digo que me devuelva tambien el payload
  }
}*/
