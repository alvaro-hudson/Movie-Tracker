export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'

import { retrieveMovies, insertMovie } from '../apis/apiClient'

//Actions

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: movies,
  }
}


export function addMovie(newMovie) {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  }
}


//Thunks

export function fetchMovies() {
  return (dispatch) => {
    return retrieveMovies()
      .then((movies) => {
        dispatch(receiveMovies(movies))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function pushMovie(newMovie) {
  console.log('THUNK', newMovie)
  return (dispatch) => {
    return insertMovie(newMovie)
      .then((movie) => {
        dispatch(addMovie(movie))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
