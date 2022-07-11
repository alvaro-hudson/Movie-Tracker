import { combineReducers } from 'redux'
import MoviesReducer from './moviesReducer'

// import stuff from './stuff'

export default combineReducers({
  movies: MoviesReducer
})
