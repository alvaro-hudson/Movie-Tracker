import React from 'react'
import { Link } from 'react-router-dom'


function MovieTile ({ clickHandler, result }) {


  return (
    result.map(movie => {
      return (
      <div className="search-result-tile" key={movie.id}>
         <img src={movie.image} alt={`Poster for ${movie.title}`} />
         <Link to={`/movies/${movie.id}`}><h2>{movie.title}</h2></Link>
         <p>{movie.description}</p>
        <button onClick={() => clickHandler(movie)}>Add</button>
       </div>
      )
     })
  )
}

export default MovieTile