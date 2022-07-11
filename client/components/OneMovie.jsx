import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getImdbInfo } from '../apis/apiClient'

function OneMovie() {

  const { imdbId } = useParams()
  // const imdbId = useParams().imdbId   //This is the same version as above but written out differently

  const [movie, movieInfo] = useState([])
  {movie && console.log('IMDB INFO', movie)}

  useEffect(() => {
    getImdbInfo(imdbId)
      .then(res => {
        movieInfo(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='one-movie-container'>
      <div className='one-movie-image'>
        <img src={movie.image} alt={`Movie poster for ${movie.image}`} />
      </div>
      <div className='one-movie-text'>
        <h1>{movie.title}   ({movie.year})</h1>
        <button>Watched</button>
        <button>Delete</button>
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