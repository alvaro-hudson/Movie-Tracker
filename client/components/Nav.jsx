import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Stack,
  Heading,
  Button,
} from '@chakra-ui/core'

export default function Nav() {

  const { pathname } = useLocation()

  const NavDisplay = (pathname) => {
    switch (pathname) {
      case '/':
        return <Button><Link to={'/add'}>Add New</Link></Button>
      case '/add': 
        return <Button><Link to={'/'}>All Movies</Link></Button>
      default:
        return (
          <Stack isInline>
            <Button><Link to={'/'}>All Movies</Link></Button>
            <Button><Link to={'/add'}><p>Add New</p></Link> </Button>
          </Stack>
        )
    }
  }

  return (
    <Stack isInline w="full" h='full' px={20} py={10} bg='red.200' justifyContent='space-between'>
      <Heading>Alvaro&apos;s Movie Watchlist</Heading>
      {pathname && NavDisplay(pathname)}
    </Stack>
  )
}

