import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../../redux/apiCalls'
import { logout } from '../../redux/userRedux'
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  LoginLink,
  Error,
  Label,
} from './LoginStyles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { pending, error, currentUser } = useSelector((state) => state.user)
  const history = useHistory()

  useEffect(() => {
    if (currentUser) {
      history.push('/')
    }
  }, [currentUser, history])

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Label>Email</Label>
          <Input
            placeholder='email@example.com'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Password </Label>
          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={pending}>
            Login
          </Button>
          {error && <Error>{error}</Error>}
          <LoginLink to='/'>Forgot password?</LoginLink>
          <LoginLink to='/register' onClick={() => dispatch(logout())}>
            Create new Account
          </LoginLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
