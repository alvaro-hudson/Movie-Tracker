import React, { useState } from 'react'
import { searchImdbInfo } from '../apis/apiClient'
import { Link } from 'react-router-dom'

function AddMovie() {

  const [search, setSearch] = useState('')
  const [result, getResults] = useState([])

  // console.log('RESULTS', result)

  const handleChange = (e) => {
    let userSearch = e.target.value
    setSearch(userSearch)
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
            <button>Add</button>
          </div>
         )
        })}
      </div>
    </>
  )
}

export default AddMovie