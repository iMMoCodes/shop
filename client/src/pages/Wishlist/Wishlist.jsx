import { useSelector, useDispatch } from 'react-redux'
import { BasicModal } from '../../Components/Popup/Popup'
import {
  Container,
  Title,
  Table,
  Tr,
  Th,
  Product,
  Name,
  Image,
  Price,
  Stock,
  Buttons,
  Add,
  Delete,
} from './WishlistStyles'
import { DeleteOutline } from '@material-ui/icons'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
import { useEffect } from 'react'
import { deleteWishList, getWishList } from '../../redux/apiCalls'

const Wishlist = () => {
  const products = useSelector((state) => state.wish.wishList)
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    getWishList(dispatch, user._id)
  }, [dispatch, user._id])

  const handleRemove = (id) => {
    deleteWishList(dispatch, id)
  }

  return (
    <Container>
      <Navbar />
      <Title>Wishlist</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Unit Price</Th>
            <Th>Stock Status</Th>
            <Th>Actions</Th>
          </Tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <Tr key={index}>
              <Product>
                <Image src={item.product.image} alt='Product image' />
                <Name>{item.product.title}</Name>
              </Product>
              <Price>{item.product.price} €</Price>
              <Stock>
                {item.product.inStock ? 'In stock' : 'Not in stock'}
              </Stock>
              <Buttons>
                <Add>
                  <BasicModal item={item.product} iconColor='#4aa83f' />
                </Add>
                <Delete onClick={() => handleRemove(item._id)}>
                  <DeleteOutline style={{ color: '#e43838' }} />
                </Delete>
              </Buttons>
            </Tr>
          ))}
        </tbody>
      </Table>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Wishlist
