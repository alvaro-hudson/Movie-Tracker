export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'

import { retrieveMovies, insertMovie, deleteMovie, updateMovie } from '../apis/apiClient'

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

export function updWatched(imdbId, watched) {
  return {
    type: UPDATE_MOVIE,
    payload: {imdbId, watched}
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

export function updateWatched(imdbId, watched) {
  return (dispatch) => {
    return updateMovie(imdbId, watched)
      .then(() => {
        dispatch(updWatched(imdbId, watched))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
