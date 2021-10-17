import React from 'react'
import {
  AccountCircleOutlined,
  LibraryBooksOutlined,
  LocalMallOutlined,
  RoomOutlined,
  SettingsOutlined,
} from '@material-ui/icons'
import { Container, Side, List, ListItem, Title } from './SidebarStyles'

export const Sidebar = () => {
  return (
    <Container>
      <Side>
        <Title>My Account</Title>
        <List>
          <ListItem>
            <AccountCircleOutlined style={{ marginRight: '5px' }} />
            My Details
          </ListItem>
          <ListItem>
            <RoomOutlined style={{ marginRight: '5px' }} />
            My Address book
          </ListItem>
          <ListItem>
            <LocalMallOutlined style={{ marginRight: '5px' }} />
            My Orders
          </ListItem>
          <ListItem>
            <LibraryBooksOutlined style={{ marginRight: '5px' }} />
            My Newsletter
          </ListItem>
          <ListItem>
            <SettingsOutlined style={{ marginRight: '5px' }} />
            Account Settings
          </ListItem>
        </List>
      </Side>
    </Container>
  )
}
