import React from 'react'
import { Avatar, Badge } from '@material-ui/core'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import {
  Container,
  Wrapper,
  Left,
  Right,
  Span,
  IconContainer,
} from './TopbarStyles'
const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>ImmoStore Admin</Span>
        </Left>
        <Right>
          <Avatar
            style={{ marginRight: '10px', cursor: 'pointer' }}
            alt='Avatar'
            src='./test-person.jpeg'
          />
          <IconContainer>
            <Badge badgeContent={4} color='primary'>
              <NotificationsNone />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge color='primary'>
              <Language />
            </Badge>
          </IconContainer>
          <IconContainer>
            <Badge color='primary'>
              <Settings />
            </Badge>
          </IconContainer>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Topbar
