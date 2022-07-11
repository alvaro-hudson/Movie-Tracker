import React, { useState } from 'react'
import { searchImdbInfo } from '../apis/apiClient'

function AddMovie() {

  const [search, setSearch] = useState('')
  const [results, getResults] = useState([])

  console.log('RESULTS', results)

  const handleChange = (e) => {
    let userSearch = e.target.value
    setSearch(userSearch)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchImdbInfo(search)
      .then(res => {
        getResults(res)
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

      </div>
    </>
  )
}

export default AddMovie