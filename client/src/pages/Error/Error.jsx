import React from 'react'
import { Container, Title } from './ErrorStyles'
import { SentimentVeryDissatisfied } from '@material-ui/icons'
import { NavLink } from '../../AppStyles'

const Error = () => {
  return (
    <Container>
      <SentimentVeryDissatisfied
        style={{ color: 'yellow', fontSize: '250px' }}
      />
      <Title>Oops! Looks like this page doesn't exist.</Title>
      <NavLink to='/'>Go back to homepage</NavLink>
    </Container>
  )
}

export default Error
