import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {

  const { pathname } = useLocation()

  const NavDisplay = (pathname) => {
    switch (pathname) {
      case '/':
        return <Link to={'/add'}><p>Add New</p></Link>
      case '/add': 
        return <Link to={'/'}> <p>All Movies</p> </Link>
      default:
        return (
          <>
            <Link to={'/'}> <p>All Movies</p>
            </Link> <Link to={'/add'}><p>Add New</p></Link> 
        </>
        )
    }
  }

  return (
    <div className='nav'>
      <h1>Alvaro&apos;s Movie Watchlist</h1>
      {pathname && NavDisplay(pathname)}
    </div>
  )
}