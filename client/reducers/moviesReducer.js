import { RECEIVE_MOVIES, ADD_MOVIE } from '../actions/actions'

// const initialState = {
//   id: 1,
//   title: 'The Batman',
//   img: 'https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.7273_AL_.jpg',
//   imdb_id: 'tt1877830',
//   watched: false,
// }

const MoviesReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case RECEIVE_MOVIES:
      return payload
    case ADD_MOVIE:
      return state //just returning state for now
    default:
      return state
  }
}

export default MoviesReducer
