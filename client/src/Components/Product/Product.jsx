import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons'
import { BasicModal } from '../Popup/Popup'
import { NavLink } from '../../AppStyles'
import { Info, Container, Circle, Image, Icon } from './ProductStyles'

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <BasicModal item={item} />
        </Icon>
        <Icon>
          <NavLink to={`/product/${item._id}`}>
            <SearchOutlined />
          </NavLink>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
