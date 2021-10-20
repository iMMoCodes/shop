import React from 'react'
import {
  AccountCircleOutlined,
  LibraryBooksOutlined,
  LocalMallOutlined,
  Security,
  SettingsOutlined,
} from '@material-ui/icons'
import { Container, Side, List, ListItem, Title } from './SidebarStyles'
import { NavLink } from '../../AppStyles'

export const Sidebar = () => {
  return (
    <Container>
      <Side>
        <Title>My Account</Title>
        <List>
          <NavLink to='/account/details'>
            <ListItem>
              <AccountCircleOutlined style={{ marginRight: '5px' }} />
              My Details
            </ListItem>
          </NavLink>
          <NavLink to='/account/security'>
            <ListItem>
              <Security style={{ marginRight: '5px' }} />
              Security
            </ListItem>
          </NavLink>
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
