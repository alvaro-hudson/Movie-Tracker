const express = require('express')
const db = require('../db/db')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getMovies()
    .then((movies) => {
      res.json(movies)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const newMovie = req.body
  console.log('ROUTE', newMovie)
  db.addMovie(newMovie)
    .then((iddArr) => {
      const id = iddArr
      db.getOneMovie(id)
        .then((movie) => {
          res.send(movie)
        })
        .catch((err) => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
