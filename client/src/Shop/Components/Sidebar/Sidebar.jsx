import React from 'react';
import {
  AccountCircleOutlined,
  LibraryBooksOutlined,
  LocalMallOutlined,
  Security,
} from '@material-ui/icons';
import { Container, Side, List, ListItem, Title } from './SidebarStyles';
import { NavLink } from '../../../AppStyles';

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
          <NavLink to='/account/orders'>
            <ListItem>
              <LocalMallOutlined style={{ marginRight: '5px' }} />
              My Orders
            </ListItem>
          </NavLink>
          <NavLink to='/account/newsletter'>
            <ListItem>
              <LibraryBooksOutlined style={{ marginRight: '5px' }} />
              My Newsletter
            </ListItem>
          </NavLink>
        </List>
      </Side>
    </Container>
  );
};
