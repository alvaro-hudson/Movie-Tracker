import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getImdbInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/actions'

function OneMovie() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { imdbId } = useParams()
  // const imdbId = useParams().imdbId   //This is the same version as above but written out differently

  const [movie, movieInfo] = useState([])
  // {movie && console.log('IMDB INFO', movie)}
  const [deleted, deleteStatus] = useState(true)

  useEffect(() => {
    getImdbInfo(imdbId)
      .then(res => {
        movieInfo(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //To Delete - runs the thunk in actions.js
  const handleClick = () => {
    deleteStatus(false)
    dispatch(removeMovie(movie.id))
    setTimeout(() => navigate('/'), 1200)
  }


  return (
    <div className='one-movie-container'>
      <div className='one-movie-image'>
        <img src={movie.image} alt={`Movie poster for ${movie.image}`} />
      </div>
      <div className='one-movie-text'>
        <h1>{movie.title}   ({movie.year})</h1>
        <button>Watched</button>
        {deleted ? <button className='delete-btn' onClick={handleClick}>Delete</button> : <p>DELETED</p> }
        <p><em>{movie.awards}</em></p>
        <p><em>{movie.genres}</em></p>
        <p><em>{movie.runtimeStr}</em></p>
        <p>{movie.plot}</p>
        <p>Cast: {movie.stars}</p>
        <p>Director: {movie.directors}</p>
      </div>
    </div>
  )
}

export default OneMovie