import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1``
const Text = styled.p``

const Success = () => {
  return (
    <Container>
      <Title>Success!</Title>
      <Text>Your order is being prepared. Thanks for choosing ImmoStore.</Text>
    </Container>
  )
}

export default Success
