import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Link,
} from './LoginStyles'

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
