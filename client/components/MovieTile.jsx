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
      <Box size="2xs" p={5} justifyItems='center' key={movie.id} w='100%' h='auto' borderRadius={20} bg='gray.800' className='movie-hover'>
        <Link to={`/movies/${movie.id}`}>
          <Image src={movie.image} alt={`Poster for ${movie.title}`} />
          <Heading color='white' as='h2' size='lg'>{movie.title}</Heading>
          <Text color='white'>{movie.description}</Text>
          <Button onClick={() => clickHandler(movie)}>Add</Button>
        </Link>
        
      </Box>
      )
    })
  )
}

export default MovieTile