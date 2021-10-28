import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/userRedux';
import { useHistory } from 'react-router';
import { deleteCart } from '../../../redux/cartRedux';
import { NavLink } from '../../../AppStyles';
import { Avatar, Badge } from '@material-ui/core';
import { NotificationsNone, ExitToAppOutlined } from '@material-ui/icons';
import {
  Container,
  Wrapper,
  Left,
  Right,
  Span,
  IconContainer,
} from './TopbarStyles';
const Topbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(deleteCart());
    history.push('/');
  };

  return (
    <Container>
      <Wrapper>
        <NavLink to='/admin'>
          <Left>
            <Span>ImmoStore Admin</Span>
          </Left>
        </NavLink>
        <Right>
          <Avatar
            style={{ marginRight: '10px', cursor: 'pointer' }}
            alt='Avatar'
            src='/test-person.jpeg'
          />
          <IconContainer>
            <Badge badgeContent={4} color='primary'>
              <NotificationsNone />
            </Badge>
          </IconContainer>
          <IconContainer onClick={handleLogout}>
            <ExitToAppOutlined style={{ color: '#cc1d1d', fontSize: '30px' }} />
          </IconContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
