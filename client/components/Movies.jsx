import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/actions'
import { Link } from 'react-router-dom'

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
        <div className='movie-tile' key={movies.id}>
          <img src={movie.img} alt={`Cinema poster for ${movie.title}`} />
          <Link to={'/movies'}>
          <p>{movie.title}</p>
          </Link>
        </div>
        )
      })}
    </div>

  )
}

export default ShowMovies