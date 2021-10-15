import { NavLink } from '../../AppStyles'
import { useSelector } from 'react-redux'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
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
            <Input placeholder='Search...' />
            <Search style={{ color: 'gray', fontSize: 16 }} />
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
