//src/redux/actions/index.js

// action creator
const requestMoviesStarted = () => ({
    type: 'REQUEST_MOVIES_STARTED',
  });
  
  // action creator
  const receiveMovies = (movies) => ({
    type: 'RECEIVE_MOVIES',
    movies,
  });
  
  // thunk action creator: deve retornar uma função
  export function fetchMovies() {
    return (dispatch, _getState) => { 
      dispatch(requestMoviesStarted()); // dispatch da action 'REQUEST_MOVIES_STARTED' 
      return fetch('alguma-api-qualquer.com')
        .then((response) => response.json())
        .then((movies) => dispatch(receiveMovies(movies))); // dispatch da action 'RECEIVE_MOVIES'
    };
  }