import request from 'superagent'

const rootUrl = '/api/v1/movies'
const extApi = 'https://imdb-api.com/en/API/title/k_ad77adjj'

//api functions

export function getImdbInfo(imdbId) {
  console.log(imdbId)
  return request.get(`${extApi}/${imdbId}`).then((res) => {
    console.log(res.body)
    return res.body
  })
}

//Database functions

export function retrieveMovies() {
  return request.get(rootUrl).then((res) => res.body) //this gets all the movies from the database
}

export function insertMovie(newMovie) {
  return request
    .post(rootUrl)
    .send(newMovie)
    .then((res) => res.body) //this returns the movie that was added
}
