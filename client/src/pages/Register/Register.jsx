import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register } from '../../redux/apiCalls'
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Item,
  Label,
} from './RegisterStyles'

const Register = () => {
  const [inputs, setInputs] = useState({})
  // const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    register(dispatch, inputs)
    setTimeout(() => {
      history.push('/login')
    }, 3000)
  }

  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Item>
            <Label>Username</Label>
            <Input
              type='text'
              placeholder='Username'
              name='username'
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='email@example.com'
              name='email'
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Label>First Name</Label>
            <Input
              type='text'
              placeholder='First Name'
              name='firstName'
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Label>Last Name</Label>
            <Input
              type='text'
              placeholder='Last Name'
              name='lastName'
              onChange={handleChange}
            />
          </Item>
          <Item>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='********'
              name='password'
              onChange={handleChange}
            />
          </Item>
          {/* <Item>
            <Label>Image</Label>
            <Input
              type='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Item> */}
        </Form>
        <Button onClick={handleClick}>Register</Button>
      </Wrapper>
    </Container>
  )
}

export default Register
