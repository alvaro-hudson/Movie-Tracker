import React from 'react'

function AddMovie() {

  return (
    <>
      <h1>Add New Movie</h1>
      <div className='add-movie-form-container'>
        <form>
          <label htmlFor="search">Search </label>
          <input type="text" name="search" id="search" />
          <button></button>
        </form>
      </div>
      <div className='add-movie-results'>

      </div>
    </>
  )
}

export default AddMovie