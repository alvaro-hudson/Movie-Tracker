const connection = require('./connection')

function getMovies(db = connection) {
  return db('movies')
}

function getOneMovie(id, db = connection) {
  return db('movies').select().where('id', id).first()
}

function addMovie(newMovie, db = connection) {
  return db('movies').insert(newMovie)
}

function deleteMovie(id, db = connection) {
  return db('movies').del().where('imdb_id', id)
}

function updateWatched(id, watched, db = connection) {
  return db('movies').update(watched).where('id', id)
}



module.exports = {
  getMovies,
  getOneMovie,
  addMovie,
  deleteMovie,
  updateWatched
}
