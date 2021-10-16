import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { NavLink } from '../../AppStyles'
import { updateProduct, deleteProduct, deleteCart } from '../../redux/cartRedux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../../requestMethods'
import { Add, Remove } from '@material-ui/icons'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from './CartStyles'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (type, product) => {
    if (type === 'dec' && product.quantity === 1) {
      dispatch(
        deleteProduct({ id: product._id, quantity: -1, price: product.price })
      )
    } else if (type === 'dec') {
      dispatch(
        updateProduct({ id: product._id, quantity: -1, price: product.price })
      )
    } else {
      dispatch(
        updateProduct({ id: product._id, quantity: 1, price: product.price })
      )
    }
  }

  const clearCart = () => {
    dispatch(deleteCart())
  }

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 5 * 100,
        })
        history.push('/success', { data: res.data })
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, history])
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <NavLink to='/'>
            <TopButton>Continue Shopping</TopButton>
          </NavLink>
          <TopTexts>
            <TopText>Shopping cart ({cart.products.length})</TopText>
            <TopText>Your wishlist (0)</TopText>
          </TopTexts>
          <TopButton type='filled' onClick={clearCart}>
            Clear Cart
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => handleClick('dec', product)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add onClick={() => handleClick('inc', product)} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} €
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>6.90 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-6.90 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total} €</SummaryItemPrice>
            </SummaryItem>
            {cart.total !== 0 ? (
              <StripeCheckout
                name='Immo Store'
                image='https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total} €`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
              >
                <Button>Checkout Now</Button>
              </StripeCheckout>
            ) : (
              <Button>Add items to your cart to checkout</Button>
            )}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
