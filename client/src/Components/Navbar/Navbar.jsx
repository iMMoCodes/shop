import { NavLink } from '../../AppStyles'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/userRedux'
import {
  ShoppingCartOutlined,
  AccountCircle,
  ExitToApp,
} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { SearchModal } from '../SearchModal/SearchModal'
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
} from './NavbarStyles'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
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
            <Logo>ImmoStore</Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
            <>
              <NavLink to='/account/'>
                <MenuItem>
                  <AccountCircle style={{ marginRight: '5px' }} />
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
              <NavLink to='/login'>
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
  )
}

export default Navbar
