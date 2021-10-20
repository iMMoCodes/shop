import { useRef } from 'react'
import { FavoriteBorderOutlined, SearchOutlined } from '@material-ui/icons'
import { BasicModal } from '../Popup/Popup'
import { NavLink } from '../../AppStyles'
import { Info, Container, Circle, Image, Icon } from './ProductStyles'
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '../Snackbar/Snackbar'
import { addWishList } from '../../redux/apiCalls'

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const snackbarRef = useRef(null)

  const addToFavorites = (itemId) => {
    snackbarRef.current.show()
    addWishList(dispatch, user._id, itemId)
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
        <Icon onClick={() => addToFavorites(item._id)}>
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
