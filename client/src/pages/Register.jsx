import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('https://images.pexels.com/photos/4598196/pexels-photo-4598196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '100%' })}
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%', margin: '10px' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: black;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='first name' />
          <Input placeholder='last name' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            error deserunt laboriosam non eius quasi saepe illo voluptas,
            molestiae nam?
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
