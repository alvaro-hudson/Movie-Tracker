import request from "superagent"

const rootUrl = '/api/v1/movies'

//api functions






//Database functions

export function retrieveMovies() {
  return request.get(rootUrl)
    .then(res => res.body)  //this gets all the movies from the database
}

export function insertMovie(newMovie) {
  return request.post(rootUrl)
    .send(newMovie)
    .then(res => res.body) //this returns the movie that was added
}