import React from 'react'
import Nav from './Nav'
import ShowMovies from './ShowMovies'
import OneMovie from './OneMovie'
import AddMovie from './AddMovie'
import { Routes, Route } from 'react-router'
import {
  Box,
  Flex
} from '@chakra-ui/core'


function App () {
  return (
      <Box Width='100%' padding={0}>
        <Flex flexDirection='column'>
          <Nav />
          <Routes>
            <Route path='/' element={ <ShowMovies /> } />
            <Route path='/movies/:imdbId' element={ <OneMovie />} />
            <Route path='/add' element={<AddMovie />}></Route>
          </Routes>
        </Flex>
      </Box>
  )
}

export default App
