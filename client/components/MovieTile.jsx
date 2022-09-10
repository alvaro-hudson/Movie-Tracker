import React from 'react'
import { Link } from 'react-router-dom'
import {
Image,
Grid,
Text,
Button,
Box,
AspectRatioBox,
Heading
} from '@chakra-ui/core'


function MovieTile ({ clickHandler, result }) {
  console.log('movietile', result)


  return (
    
    result.map(movie => {
      return (
      <Box size="2xs" p={5} justifyItems='center' key={movie.id} w='100%' h='auto' borderRadius={20} bg='gray.800' className='movie-hover'>
        {/* <AspectRatioBox ratio={4/6}> */}
          <Image src={movie.image} alt={`Poster for ${movie.title}`} />
          <Link to={`/movies/${movie.id}`}><Heading>{movie.title}</Heading></Link>
          <Text>{movie.description}</Text>
          <Button onClick={() => clickHandler(movie)}>Add</Button>
        {/* </AspectRatioBox> */}
        
      </Box>
      )
    })
  )
}

export default MovieTile