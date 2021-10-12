import styled from 'styled-components'
import { tablet } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)),
    url('https://images.pexels.com/photos/4598196/pexels-photo-4598196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${tablet({ width: '75%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: black;
  cursor: pointer;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>Login</Button>
          <Link>Forgot password?</Link>
          <Link>Create new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
