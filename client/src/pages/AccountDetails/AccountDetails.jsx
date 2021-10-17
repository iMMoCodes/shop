import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
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
  const user = useSelector((state) => state.user.currentUser)
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
                  <Input type='text' placeholder={user.firstName} />
                </FormItem>
                <FormItem>
                  <Label>Last Name</Label>
                  <Input type='text' placeholder={user.lastName} />
                </FormItem>
                <FormItem>
                  <Label>Password</Label>
                  <Input type='password' placeholder='********' />
                </FormItem>
                <FormItem>
                  <Label>Image</Label>
                  <Input type='file' />
                </FormItem>
              </Form>
            </Info>
            <ButtonDiv>
              <Button>Save</Button>
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
                  <Input type='email' placeholder={user.email} />
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
