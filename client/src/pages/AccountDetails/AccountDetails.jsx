import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { UpdateUser } from '../../redux/apiCalls'
import {
  Button,
  ButtonDiv,
  Container,
  Form,
  FormItem,
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
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.currentUser)

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    UpdateUser(dispatch, user._id, inputs, user.accessToken)
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
                  <Input type='file' />
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
