import React from 'react'
import { searchImdbInfo } from '../apis/apiClient'

//This is not complete. Am hoping to move the Search functionality from add movie over to this component to make it tidier

function MovieSearch () {

  const [search, setSearch] = useState('')
  const [result, getResults] = useState([])


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
    <div className='add-movie-form-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search </label>
          <input type="text" name="search" id="search" onChange={handleChange}/>
          <button>Done</button>
        </form>
      </div>
  )
}