import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchImdbInfo } from '../apis/apiClient'
import MovieTile from './MovieTile'
import { pushMovie } from '../actions/actions'
// import { MovieSearch } from './MovieSearch'

function AddMovie() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [result, getResults] = useState([])

  // console.log('RESULTS', result)

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
        {result && <MovieTile clickHandler={clickHandler} result={result}/>}
      </div>
    </>
  )
}

export default AddMovie