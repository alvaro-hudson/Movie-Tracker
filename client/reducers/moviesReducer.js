import { RECEIVE_MOVIES, ADD_MOVIE, DEL_MOVIE } from '../actions/actions'


const MoviesReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_MOVIES:
      return payload
    case ADD_MOVIE:
      return [...state, payload]
    case DEL_MOVIE:
      return state.filter(movie => movie.imbd_id !== payload)
    default:
      return state
  }
}

export default MoviesReducer
