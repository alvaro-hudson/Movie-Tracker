import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchImdbInfo } from '../apis/apiClient'
import MovieTile from './MovieTile'
import { pushMovie } from '../actions/actions'
import {
  Heading,
  Stack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Grid

} from '@chakra-ui/core'
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
    <Stack h='auto' w='100%' color='white' alignContent='center' justifyContent='center' direction='column'> 
      <Heading>Add New Movie</Heading>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel htmlFor="search">Search </FormLabel>
        <Input type="text" name="search" id="search" onChange={handleChange}/>
        <FormHelperText id="search">Find a movie to add</FormHelperText>
        <Button color='black'>Search</Button>
      </FormControl>
      <Grid templateColumns={{ small: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} templateRows='auto' gap={6} p={6} h='auto'>
      {result && <MovieTile clickHandler={clickHandler} result={result}/>}
      </Grid>
    </Stack>
  )
}

export default AddMovie