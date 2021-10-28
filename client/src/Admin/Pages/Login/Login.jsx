import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCalls'
import { Button, Container, Input } from './LoginStyles'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { username, password })
  }

  return (
    <Container>
      <Input
        type='text'
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleClick}>Login</Button>
    </Container>
  )
}

export default Login
