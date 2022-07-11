import React from 'react'
import Nav from './Nav'
import ShowMovies from './Movies'
import OneMovie from './OneMovie'
import { Routes, Route } from 'react-router'

function App () {
  return (
    <>
      <section className="main">
        <Nav />
        <Routes>
          <Route path='/' element={ <ShowMovies /> } />
          <Route path='/movies' element={ <OneMovie />} />
        </Routes>

      </section>
    </>
  )
}

export default App
