import React from 'react'
import { Link } from 'react-router-dom'
import {
Image,
Text,
Button,
Box,
Heading
} from '@chakra-ui/core'


function MovieTile ({ clickHandler, result }) {


  return (
    
    result.map(movie => {
      return (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <Box size="2xs" p={5} w='100%' h='100%' borderRadius={20} bg='gray.800' className='movie-hover' display='flex' flexDirection='column' justifyContent='space-between' alignItems='center'>
            <Image src={movie.image} alt={`Poster for ${movie.title}`} />
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Heading color='white' as='h2' size='lg' textAlign='center'>{movie.title}</Heading>
              <Text color='white'>{movie.description}</Text>
              <Button onClick={() => clickHandler(movie)}>Add</Button>
            </Box>
          </Box>
        </Link>
      )
    })
  )
}

export default MovieTile