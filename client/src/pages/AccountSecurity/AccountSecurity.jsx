import { ArrowUpward } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { updateMyPassword } from '../../redux/apiCalls'
import {
  Button,
  ButtonDiv,
  Container,
  Divider,
  ErrorMessage,
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
} from './AccountSecurityStyles'

const AccountSecurity = () => {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()
  const error = useSelector((state) => state.user?.error?.errors)

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    updateMyPassword(dispatch, { ...inputs })
    setInputs({})
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Right>
          <Title>Security</Title>
          <Subtitle>Password</Subtitle>
          <Info>
            <InfoText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              recusandae voluptatem quam eum velit illo blanditiis maxime nam
              dicta. Sed.
            </InfoText>
            <Form>
              <FormItem>
                <Label>Current Password</Label>
                <Input
                  type='password'
                  placeholder='********'
                  name='passwordCurrent'
                  onChange={handleChange}
                />
              </FormItem>
              <FormItem>
                <Label>New Password</Label>
                <Input
                  type='password'
                  placeholder='********'
                  name='password'
                  onChange={handleChange}
                />
                {error?.password && (
                  <ErrorMessage>
                    <ArrowUpward />
                    Password needs to be atleast 8 characters.
                  </ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <Label>Confirm New Password</Label>
                <Input
                  type='password'
                  placeholder='********'
                  name='passwordConfirm'
                  onChange={handleChange}
                />
                {error?.passwordConfirm && (
                  <ErrorMessage>
                    <ArrowUpward />
                    Passwords don't match
                  </ErrorMessage>
                )}
              </FormItem>
            </Form>
          </Info>
          <ButtonDiv>
            <Button extraMargin onClick={handleClick}>
              Update
            </Button>
          </ButtonDiv>
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  )
}

export default AccountSecurity
