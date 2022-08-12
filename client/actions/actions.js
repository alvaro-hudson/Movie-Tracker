export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'

import { retrieveMovies, insertMovie, deleteMovie } from '../apis/apiClient'

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

export function delMovie(id) {
  return {
    type: DEL_MOVIE,
    payload: id
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

export function removeMovie(id) {
  return (dispatch) => {
    console.log('thunk', id)
    return deleteMovie(id)
      .then(() => {
        dispatch(delMovie(id))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
