import React from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { NavLink } from '../../AppStyles'
import { userRequest } from '../../requestMethods'
import {
  Container,
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
  Error,
  Success,
} from './PasswordResetStyles'

const PasswordReset = () => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState({})
  const history = useHistory()
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const passwordError = error?.err?.errors

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      const res = await userRequest.patch(
        `/auth/resetPassword/${id}`,
        {
          password,
          passwordConfirm,
        },
        {
          withCredentials: true,
        }
      )
      if (res.data.status === 'success') {
        setError('success')
        setTimeout(() => {
          history.push('/login')
        }, 3000)
      }
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>Set your new password</Title>
        <Form>
          <Label>New password</Label>
          {passwordError?.hasOwnProperty('password') && (
            <Error>{`Your password length must be atleast (8)`}</Error>
          )}
          <Input
            type='password'
            name='password'
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Confirm new password </Label>
          {passwordError?.hasOwnProperty('passwordConfirm') && (
            <Error>Passwords don't match!</Error>
          )}
          <Input
            placeholder='password'
            type='password'
            name='passwordConfirm'
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <Button onClick={handleClick}>Reset Password</Button>
          {error?.status === 'error' && <Error>{error.message}</Error>}
          {error === 'success' && (
            <Success>
              Your password has been changed. You will be redirected to login
              page in 3 seconds.
            </Success>
          )}
          <NavLink to='/login'>Login</NavLink>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default PasswordReset
