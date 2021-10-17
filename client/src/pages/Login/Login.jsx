import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/apiCalls'
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  LoginLink,
  Error,
} from './LoginStyles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { pending, error, currentUser } = useSelector((state) => state.user)
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
    currentUser && history.push('/')
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={pending}>
            Login
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <LoginLink to='/'>Forgot password?</LoginLink>
          <LoginLink to='/'>Create new Account</LoginLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
