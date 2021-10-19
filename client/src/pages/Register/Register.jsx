import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { NavLink } from '../../AppStyles'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
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
  Links,
  ErrorMessage,
} from './RegisterStyles'
import { ArrowUpward } from '@material-ui/icons'
import { logout } from '../../redux/userRedux'

const Register = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector((state) => state.user.error?.err?.errors)
  const err = useSelector((state) => state.user.error?.err)
  const status = useSelector((state) => state.user.success)
  console.log(error)
  console.log(err)

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        history.push('/login')
      }, 3000)
    }
  }, [status, history])

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (file) {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file)

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const registerUser = { ...inputs, image: downloadURL }
            register(dispatch, registerUser)
          })
        }
      )
    } else {
      const registerUser = { ...inputs }
      register(dispatch, registerUser)
    }
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
            {error && error.hasOwnProperty('username') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.username.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='email@example.com'
              name='email'
              onChange={handleChange}
            />
            {error && error.hasOwnProperty('email') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.email.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>First Name</Label>
            <Input
              type='text'
              placeholder='First Name'
              name='firstName'
              onChange={handleChange}
            />
            {error && error.hasOwnProperty('firstName') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.firstName.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>Last Name</Label>
            <Input
              type='text'
              placeholder='Last Name'
              name='lastName'
              onChange={handleChange}
            />
            {error && error.hasOwnProperty('lastName') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.lastName.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='********'
              name='password'
              onChange={handleChange}
            />
            {error && error.hasOwnProperty('password') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.password.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>Confirm Password</Label>
            <Input
              type='password'
              placeholder='********'
              name='passwordConfirm'
              onChange={handleChange}
            />
            {error && error.hasOwnProperty('passwordConfirm') && (
              <ErrorMessage>
                <ArrowUpward style={{ fontSize: '16px' }} />
                {error.passwordConfirm.message}
              </ErrorMessage>
            )}
          </Item>
          <Item>
            <Label>Image</Label>
            <Input
              style={{ width: '200px' }}
              type='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Item>
        </Form>
        <Button onClick={handleClick}>Register</Button>
        {err && err.code === 11000 && (
          <ErrorMessage style={{ marginBottom: '20px' }}>
            This {Object.keys(err.keyPattern)[0]} is already in use.
          </ErrorMessage>
        )}
        {status && (
          <ErrorMessage
            style={{
              color: '#21a759',
              marginBottom: '20px',
              fontWeight: '600',
            }}
          >
            Register succesful! You will be redirected to login page in 3
            seconds
          </ErrorMessage>
        )}
        <Links>
          <NavLink to='/'>Back to Homepage</NavLink>
          <NavLink to='/login' onClick={() => dispatch(logout())}>
            Already have an account? Click here to login
          </NavLink>
        </Links>
      </Wrapper>
    </Container>
  )
}

export default Register
