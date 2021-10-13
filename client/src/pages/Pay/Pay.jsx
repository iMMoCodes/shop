import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Container, Span, Button } from './PayStyles'

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null)
  const history = useHistory()

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/v1/checkout/payment',
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        )
        console.log(res.data)
        history.push('/success')
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, history])

  return (
    <Container>
      {stripeToken ? (
        <Span>Processing... Please wait.</Span>
      ) : (
        <StripeCheckout
          name='Immo Store'
          image='https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          billingAddress
          shippingAddress
          description='Your total is 20€'
          amount={2000}
          token={onToken}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <Button>Pay Now</Button>
        </StripeCheckout>
      )}
    </Container>
  )
}

export default Pay
