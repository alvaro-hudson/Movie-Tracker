const connection = require ('./connection')

function getMovies(db = connection) {
  return db('movies')
}

function getOneMovie(id, db = connection) {
  return db('movies')
    .select()
    .where('id', id)
    .first()
}

function addMovie(id, details, db = connection) {
  return db('movies')
    .insert(details)
    .where('id', id)
}

module.exports = {
  getMovies,
  getOneMovie,
  addMovie
}