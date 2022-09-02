import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getImdbInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { removeMovie } from '../actions/actions'
import {
  Stack,
  Image,
  AspectRatioBox,
  Heading,
  Text,
  Button
} from '@chakra-ui/core'

function OneMovie() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { imdbId } = useParams()
  // const imdbId = useParams().imdbId   //This is the same version as above but written out differently

  const [movie, movieInfo] = useState([])
  // {movie && console.log('IMDB INFO', movie)}
  const [deleted, deleteStatus] = useState(true)

  useEffect(() => {
    getImdbInfo(imdbId)
      .then(res => {
        movieInfo(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //To Delete - runs the thunk in actions.js
  const handleClick = () => {
    deleteStatus(false)
    dispatch(removeMovie(movie.id))
    setTimeout(() => navigate('/'), 1200)
  }

  console.log(movie)

  return (
    <Stack isInline bg='black' color='white'>
      <AspectRatioBox w='40%' h='80%' ratio={4/6} p={6}>
        <Image src={movie.image} alt={`Movie poster for ${movie.image}`} />
      </AspectRatioBox>
      <Stack className='one-movie-text' w='60%' p={6}>
        <Heading>{movie.title}   ({movie.year})</Heading>
        <Stack isInline>
          <Button color='black'>Watched</Button>
          {deleted ? <Button className='delete-btn' color='black' onClick={handleClick}>Delete</Button> : <p>DELETED</p> }
        </Stack>
        <Text as='i'>{movie.awards}</Text>
        <Text as='i'>{movie.genres}</Text>
        <Text as='i'>{movie.runtimeStr}</Text>
        <Text paddingTop={6} paddingBottom={6}>{movie.plot}</Text>
        <Text>Cast: {movie.stars}</Text>
        <Text>Director: {movie.directors}</Text>
      </Stack>
    </Stack>
  )
}

export default OneMovie