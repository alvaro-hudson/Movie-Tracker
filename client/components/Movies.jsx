import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/actions'

function ShowMovies () {

  const dispatch = useDispatch()
  
  const movies = useSelector(state => state.movies)
  console.log(movies)

  useEffect(() => {
    return dispatch(fetchMovies())
  }, [])
  
  return (
    <div className='all-movies-container'>
      {movies.map(movie => {
        return (
        <div className='movie-tile'>
          <img src={movie.img} alt={`Cinema poster for ${movie.title}`} />
          <p>{movie.title}</p>
        </div>
        )
      })}
    </div>

  )
}

export default ShowMovies