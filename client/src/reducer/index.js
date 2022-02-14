const initialState = {
  videogames: [], //tambien vamos a tener que hacer esto de generos
  allVideogames: [], //hace una copia del estado que siempre tenga todos los personajes
  genres: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (
    action.type //cuando se dispara esta opcion me llena los 2 estados que tengo abajo: videogames y allvideogames
  ) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload, //en mi estado videogames manda todo lo que te mande la action get videogames
        allVideogames: action.payload, //meteme todos los juegos en allVideogames tambien
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    case "FILTER_BY_GENRES":
      const allVideogamesGenres = state.allVideogames;
      const genresFilter =
        action.payload === "All"
          ? allVideogamesGenres
          : allVideogamesGenres.filter((e) =>
              e.genres.includes(action.payload)
            );
      return {
        ...state,
        videogames: genresFilter,
      };
    case "GET_NAME_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload, //siempre voy a trabajr sobre lo que estoy fitrando
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "FILTER_CREATED":
      const allVideogamesOrigen = state.allVideogames;
      const createdFilter =
        action.payload === "created"
          ? allVideogamesOrigen.filter((e) => e.createdInDb)
          : allVideogamesOrigen.filter((e) => !e.createdInDb); //que va a tener la data q yo quiero filtrar
      return {
        ...state,
        videogames:
          action.payload === "All" ? state.allVideogames : createdFilter,
      };
    case "ORDER_BY_NAME":
      let sortArr =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => a.name.localeCompare(b.name))
          : state.videogames.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        videogames: sortArr,
      };
    case "ORDER_BY_RATING":
      let arrSort =
        action.payload === "asc"
          ? state.videogames.sort((a, b) => a.rating - b.rating)
          : state.videogames.sort((a, b) => b.rating - a.rating);
      return {
        ...state,
        videogames: arrSort,
      };
    default:
      return state;
  }
}

export default rootReducer;

/* case 'FILTER_BY_STATUS':  //para practicar nomas xq no tenemos status en el pi
      const allVideogames = state.allVideogames  //si tiene todo me devolves todo y sino devolveme todos los videojuegos filtrados
      const  statusFiltered = action.payload  ==='All' ? allVideogames : allVideogames.filter(e=> e.status === action.payload) filtralo por el payload que te llega(el valor del select es lo que va a ser el etarget.value y va a llegar a la accion por payload)
      por payload le pasamos cada uno de los status que llega en el back(eso en el home pero no lo puedo comentar ahi), es importante que en el select como value siempre pongamos lo que tenemos en el back xq es loo que me va a llegar por payload y lo que va a tener que coincidir
      en el filtro
        return{
         ...state,  //siempre me voy a traer el estado completo
         videogames: statusFiltered  //quiero que en mi estado videogames suceda toda la logica de arriba
        } */
