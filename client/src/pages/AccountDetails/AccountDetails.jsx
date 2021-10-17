import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import app from '../../firebase'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { updateUser } from '../../redux/apiCalls'
import {
  Button,
  ButtonDiv,
  Container,
  Form,
  FormItem,
  Image,
  Info,
  InfoText,
  Input,
  Label,
  Right,
  Subtitle,
  Title,
  Wrapper,
} from './AccountDetailsStyles'

const AccountDetails = () => {
  const [inputs, setInputs] = useState({})
  const [file, setFile] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser)

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
          const updatedUser = { ...inputs, image: downloadURL }
          updateUser(dispatch, user._id, updatedUser, user.accessToken)
        })
      }
    )
  }

  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <Sidebar />
          <Right>
            <Title>My Details</Title>
            <Subtitle>Personal Information</Subtitle>
            <Info>
              <InfoText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                recusandae voluptatem quam eum velit illo blanditiis maxime nam
                dicta. Sed.
              </InfoText>
              <Form>
                <FormItem>
                  <Label>First Name</Label>
                  <Input
                    type='text'
                    placeholder={user.firstName}
                    name='firstName'
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label>Last Name</Label>
                  <Input
                    type='text'
                    placeholder={user.lastName}
                    name='lastName'
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label>Password</Label>
                  <Input
                    type='password'
                    placeholder='********'
                    name='password'
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label>Image</Label>
                  <Image src={user.image} alt='user photo' />
                  <Input
                    type='file'
                    id='file'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormItem>
              </Form>
            </Info>
            <ButtonDiv>
              <Button onClick={handleClick}>Save</Button>
            </ButtonDiv>
            <Subtitle>Email Address</Subtitle>
            <Info>
              <InfoText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                recusandae voluptatem quam eum velit illo blanditiis maxime nam
                dicta. Sed.
              </InfoText>
              <Form>
                <FormItem>
                  <Label>Email</Label>
                  <Input
                    type='email'
                    placeholder={user.email}
                    name='email'
                    onChange={handleChange}
                  />
                </FormItem>
              </Form>
            </Info>
          </Right>
        </Wrapper>
      </Container>
    </>
  )
}

export default AccountDetails
