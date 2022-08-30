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
    <Stack isInline w='full' h='auto'>
      <Grid templateColumns={{ small: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)', xl: 'repeat(5, 1fr)' }} templateRows='auto' gap={6} p={6}>
      {movies.map(movie => {
        return (

        <Box size="2xs" p={5} justifyItems='center' key={movie.id} w='100%' h='auto'>
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