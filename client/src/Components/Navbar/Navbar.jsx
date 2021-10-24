import { NavLink } from '../../AppStyles';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';
import { ShoppingCartOutlined, ExitToApp } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { SearchModal } from '../SearchModal/SearchModal';
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Center,
  Logo,
  Right,
  MenuItem,
  Image,
  LogoImage,
} from './NavbarStyles';
import { deleteCart } from '../../redux/cartRedux';

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(deleteCart());
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchModal style={{ color: 'gray', fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to='/'>
            <Logo>
              ImmoStore
              <LogoImage src='/Loogo.png' />
            </Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
            <>
              <NavLink to='/account/details'>
                <MenuItem>
                  <Image
                    src={user.image || '/blankprofile.png'}
                    alt='user image'
                  />
                  My Account
                </MenuItem>
              </NavLink>
              <MenuItem onClick={handleLogout}>
                <ExitToApp style={{ marginRight: '5px' }} />
                Log Out
              </MenuItem>
            </>
          ) : (
            <>
              <NavLink to='/register'>
                <MenuItem>Register</MenuItem>
              </NavLink>
              <NavLink to='/login' onClick={() => dispatch(logout())}>
                <MenuItem>Sign In</MenuItem>
              </NavLink>
            </>
          )}
          <NavLink to='/cart'>
            <MenuItem>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
