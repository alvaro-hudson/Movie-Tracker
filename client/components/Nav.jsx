import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
      <h1>Alvaro&apos;s Movie Watchlist</h1>
      <Link to={'/'}> <p>All Movies</p> </Link>
      <Link to={'/add'}><p>Add New</p></Link>
    </div>
  )
}