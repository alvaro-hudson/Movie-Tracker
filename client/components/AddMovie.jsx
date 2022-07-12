import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchImdbInfo } from '../apis/apiClient'
import { Link } from 'react-router-dom'
import { pushMovie } from '../actions/actions'
// import { MovieSearch } from './MovieSearch'

function AddMovie() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [result, getResults] = useState([])

  console.log('RESULTS', result)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchImdbInfo(search)
      .then(res => {
        getResults(res.results)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const clickHandler = (movie) => {
    console.log('MOVIE', movie)
    dispatch(pushMovie({
      title: movie.title,
      img: movie.image,
      imdb_id: movie.id,
      watched: false
    }))
  }

  return (
    <>
      <h1>Add New Movie</h1>


      <div className='add-movie-form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search </label>
          <input type="text" name="search" id="search" onChange={handleChange}/>
          <button>Done</button>
        </form>
      </div>

      <div className='add-movie-results'>
        {result && result.map(movie => {
         return (
         <div className="search-result-tile" key={movie.id}>
            <img src={movie.image} alt={`Poster for ${movie.title}`} />
            <Link to={`/movies/${movie.id}`}><h2>{movie.title}</h2></Link>
            <p>{movie.description}</p>
            <button onClick={() => clickHandler(movie)}>Add</button>
          </div>
         )
        })}
      </div>
    </>
  )
}

export default AddMovie