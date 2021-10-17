import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/wishRedux'
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
import { AddShoppingCart, DeleteOutline } from '@material-ui/icons'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'

const Wishlist = () => {
  const products = useSelector((state) => state.wish.products)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(deleteProduct(id))
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
                <Image src={item.image} alt='Product image' />
                <Name>{item.title}</Name>
              </Product>
              <Price>{item.price} €</Price>
              <Stock>{item.inStock ? 'In stock' : 'Not in stock'}</Stock>
              <Buttons>
                <Add>
                  <AddShoppingCart style={{ color: '#4aa83f' }} />
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
