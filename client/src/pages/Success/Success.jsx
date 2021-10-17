import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { userRequest } from '../../requestMethods'
import { Container, Button } from './SuccessStyles'

const Success = () => {
  const location = useLocation()
  const data = location.state.stripeData
  const cart = location.state.cart
  console.log(location, data, cart)
  const currentUser = useSelector((state) => state.user.currentUser)
  const [orderId, setOrderId] = useState(null)

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        })
        setOrderId(res.data._id)
      } catch (err) {
        console.log(err)
      }
    }
    data && createOrder()
  }, [cart, data, currentUser])

  return (
    <Container>
      {orderId
        ? `Your order has been created successfully. Your order number is ${orderId}`
        : `Successful. Your order is being prepared...`}
      <Button>Go to Homepage</Button>
    </Container>
  )
}

export default Success
