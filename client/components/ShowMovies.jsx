import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies } from '../actions/actions'
import { Link } from 'react-router-dom'
import {
  AspectRatioBox,
  Stack,
  Text,
  Image,
  Grid,
  Box
} from '@chakra-ui/core'

function ShowMovies () {

  const dispatch = useDispatch()
  
  const movies = useSelector(state => state.movies)
  // console.log('MOVIES STATE', movies)

  useEffect(() => {
    return dispatch(fetchMovies())
  }, [])


  
  return (
    <Stack isInline w='full' h='auto' bg='black' color='white'>
      <Grid templateColumns={{ small: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(5, 1fr)', xl: 'repeat(7, 1fr)' }} templateRows='auto' gap={6} p={6}>
      {movies.map(movie => {
        return (

        <Box p={5} justifyItems='center' key={movie.id} w='100%' h='auto' borderRadius={20} bg='gray.800' className='movie-hover'>
          <Link to={`/movies/${movie.imdb_id}`}>
            <AspectRatioBox ratio={4/6}>
              <Image src={movie.img} alt={`Cinema poster for ${movie.title}`} />
            </AspectRatioBox>
            <Text textAlign='center'>{movie.title}</Text>
          </Link>
        </Box>
        )
      })}
      </Grid>
    </Stack>

  )
}

export default ShowMovies