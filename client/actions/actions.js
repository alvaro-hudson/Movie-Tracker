export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'

import { retrieveMovies, insertMovie } from "../apis/apiClient"

//Action that goes to the reducer to show movies in the database

export function receiveMovies(movies) {
  return {
    type: RECEIVE_MOVIES,
    payload: movies
  }
}

//Thunk to get movies from the database to then call the above function

export function fetchMovies() {
  return (dispatch) => {
    return retrieveMovies()
      .then(movies => {
        dispatch(receiveMovies(movies))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

//Action that goes to the reducer to add a movie to the state

export function addMovie(newMovie) {
  return {
    type: ADD_MOVIE,
    payload: newMovie
  }
}

export function pushMovie(newMovie) {
  return (dispatch) => {
    return insertMovie(newMovie)
      .then(movie => dispatch(addMovie(movie)))
      .catch(err => {
        console.log(err)
      })
  }
}

