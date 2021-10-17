import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
} from './RegisterStyles'

const Register = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
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
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
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
          setTimeout(() => {
            history.push('/login')
          }, 3000)
        })
      }
    )
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
          <Item>
            <Label>Image</Label>
            <Input
              type='file'
              id='file'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Item>
        </Form>
        <Button onClick={handleClick}>Register</Button>
      </Wrapper>
    </Container>
  )
}

export default Register
