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
  Grid
} from '@chakra-ui/core'
// import { MovieSearch } from './MovieSearch'

function AddMovie() {
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [result, getResults] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('hello')
    e.preventDefault()
    searchImdbInfo(search)
      .then(res => {
        console.log('results', res.results)
        getResults(res.results)
        
        // window.sessionStorage.getItem("searchDetails") ? window.sessionStorage.getItem("searchDetails") : {searchQuery:`${search}`,searchResults: `${result}`}
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
      <Stack h='auto' w='100%' color='white' p={6}> 
        <Heading as='h2' size='lg' textAlign='center'>Add New Movie</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
            <FormLabel htmlFor="search" textAlign='center' p={4}>Search</FormLabel>
            <Input type="text" name="search" id="search" placeholder='Find a movie to add' textAlign='center' color='black' w={{small: '80%', md: '60%', lg: '40%', xl: '30%'}} onChange={handleChange}/>
            <Button type='submit' color='black' margin={4}>Search</Button>
          </FormControl> 
        </form>
      </Stack>
      <Grid templateColumns={{ small: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} templateRows='auto' gap={6} p={6} h='100px'>
      {result && <MovieTile clickHandler={clickHandler} result={result}/>}
      </Grid>
    </>
   
  )
}

export default AddMovie