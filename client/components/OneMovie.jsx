import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { updateWatched, removeMovie } from '../actions/actions'
import { getImdbInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'

import {
  Stack,
  Image,
  AspectRatioBox,
  Heading,
  Text,
  Button
} from '@chakra-ui/core'

function OneMovie() {


  const dispatch = useDispatch() //to trigger the delete thunk in the handleClick function below
  const navigate = useNavigate() //in the handleClick it allows the url to change 
  const { imdbId } = useParams() // const imdbId = useParams().imdbId   //This is the same version as above but written out differently
  const location = useLocation() // Allows you to grab the state called in the Link component
  const film = location.state.movie

  console.log('film', film)

  const [movie, movieInfo] = useState([])
  const [deleted, deleteStatus] = useState(true)
  const [watched, setWatched] = useState(!film.watched)
  
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

  //To Update 'Watched' key in database
  const handleWatched = () => {
    dispatch(updateWatched(imdbId, {
      watched: true
    }))
    setWatched(!watched)
  }


  return (
    <Stack isInline bg='black' color='white' h='100%' p={10}>
      <AspectRatioBox w={['50%', '50%', '50%', '40%']} h='100%' ratio={4/6} display='flex'>
        <Image src={movie.image} alt={`Movie poster for ${movie.image}`} p={3} alignItems='center'/>
      </AspectRatioBox>
      <Stack className='one-movie-text' w='60%' h='100%'>
        <Heading>{movie.title}   ({movie.year})</Heading>
        <Stack isInline>
          {/* Need to keep working on the below */}
          {watched ? <Button color='black' onClick={handleWatched}>Not Watched</Button> : <Text bg={'green.500'}>Watched!!!</Text>}
          {deleted ? <Button className='delete-btn' color='black' onClick={handleClick}>Delete</Button> : <Text color='red.500'>DELETED</Text> }
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




  