import React from 'react'
import Nav from './Nav'
import ShowMovies from './ShowMovies'
import OneMovie from './OneMovie'
import AddMovie from './AddMovie'
import { Routes, Route } from 'react-router'
import { ThemeProvider } from '@chakra-ui/core'
import customTheme from '../styles/theme'


function App () {
  return (
    <ThemeProvider theme={customTheme}>
      <section className="main">
        <Nav />
        <Routes>
          <Route path='/' element={ <ShowMovies /> } />
          <Route path='/movies/:imdbId' element={ <OneMovie />} />
          <Route path='/add' element={<AddMovie />}></Route>
        </Routes>

      </section>
    </ThemeProvider>
  )
}

export default App
