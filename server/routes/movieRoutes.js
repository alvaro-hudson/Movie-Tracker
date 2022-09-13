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
      // eslint-disable-next-line promise/no-nesting
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

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteMovie(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const watched = req.body
  db.updateWatched(id, watched)
    .then((res) => {
      res.json(res)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
