import { NavLink } from '../../AppStyles'
import { useSelector } from 'react-redux'
import { ShoppingCartOutlined } from '@material-ui/icons'
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
          <NavLink to='/register'>
            <MenuItem>REGISTER</MenuItem>
          </NavLink>
          <NavLink to='/login'>
            <MenuItem>SIGN IN</MenuItem>
          </NavLink>
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
