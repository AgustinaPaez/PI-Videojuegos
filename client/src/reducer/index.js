const initialState = {
  videogames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VIDEOGAMES":
      return {
        ...state,
        videogames: action.payload, //en mi estado videogames manda todo lo que te mande la action get videogames
      };
    default:
      return state;
  }
}

export default rootReducer;
