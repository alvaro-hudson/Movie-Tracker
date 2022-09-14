import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getImdbInfo, updateMovie } from '../apis/apiClient'
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
    <Stack isInline bg='black' color='white' h='100%' p={10}>
      <AspectRatioBox w={['50%', '50%', '50%', '40%']} h='100%' ratio={4/6} display='flex'>
        <Image src={movie.image} alt={`Movie poster for ${movie.image}`} p={3} alignItems='center'/>
      </AspectRatioBox>
      <Stack className='one-movie-text' w='60%' h='100%'>
        <Heading>{movie.title}   ({movie.year})</Heading>
        <Stack isInline>
          <Button color='black'>Watched?</Button>
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






/*To change the movie to show it's been watched

Goal 1 -> When the button is clicked it needs to go back to the database to update the entry 'watched' to switch from false to true
  How: Clicking the 'Watched' button will trigger a function that will call
  the updateMovie function from the APIClient file

Goal 2 -> If something is watched I want the button to change to something that 
says watched and maybe a tick and it's green. If you click it again it toggles
back to the original default not watched button. It's going to have to be like this
so when you go to any movie, if the db says it's watched then it will show the 
correct button
  How: When I update the DB I also need to update the Redux State. I then need to call the state from here, perhaps useEffect() so on loading I can display the button based on whether 'watched' is true or false. Also when I click the watched button it will need to update and refresh the redux state

*/
  