import { GET_MOVIES, GET_MOVIE } from './actions';

const initialState = {
  movies: [],
  movie: null,
};
function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
}

export default moviesReducer;
