import { useLocation } from 'react-router'
import { Container, Title, Text } from './SuccessStyles'

const Success = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Container>
      <Title>Success!</Title>
      <Text>Your order is being prepared. Thanks for choosing ImmoStore.</Text>
    </Container>
  )
}

export default Success
