import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'dc11806c0f50e774518de6304a107103';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';

export const getMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/popular?api_key=${API_KEY}`,
    );
    if (res.data) {
      dispatch({
        type: GET_MOVIES,
        payload: res.data.results,
      });
    } else {
      console.log('Unable to fetch');
    }
  } catch (error) {
    console.log('There was a problem fetching data');
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/${id}?api_key=${API_KEY}&language=en-US`,
    );
    if (res.data) {
      dispatch({
        type: GET_MOVIE,
        payload: res.data,
      });
    } else {
      console.log('Unable to fetch');
    }
  } catch (error) {
    // Add custom logic to handle errors
    console.log('There was a problem fetching data');
  }
};
