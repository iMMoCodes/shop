import { useRef } from 'react'
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import { BasicModal } from '../Popup/Popup'
import { NavLink } from '../../AppStyles'
import { Info, Container, Circle, Image, Icon } from './ProductStyles'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/wishRedux'
import Snackbar from '../Snackbar/Snackbar'

const Product = ({ item }) => {
  const dispatch = useDispatch()
  const snackbarRef = useRef(null)

  const addToFavorites = (item) => {
    snackbarRef.current.show()
    dispatch(addProduct(item))
  }

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
        <Icon onClick={() => addToFavorites(item)}>
          <Snackbar
            message='Item added to Wishlist!'
            type='success'
            ref={snackbarRef}
          />
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
