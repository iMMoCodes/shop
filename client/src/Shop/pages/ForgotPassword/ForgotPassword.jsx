import React from 'react';
import { useState } from 'react';
import { NavLink } from '../../../AppStyles';
import { publicRequest } from '../../../requestMethods';
import {
  Container,
  Wrapper,
  Title,
  Form,
  Label,
  Input,
  Button,
  SubTitle,
} from './ForgotPasswordStyles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post(
        '/auth/forgotPassword',
        { email },
        {
          withCredentials: true,
        }
      );
      setResetSent(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Forgot password?</Title>
        {resetSent ? (
          <SubTitle success>
            A reset token has been sent to your email. Follow it to reset your
            password.
          </SubTitle>
        ) : (
          <SubTitle>
            You can reset your password by entering your email below.
          </SubTitle>
        )}
        <Form>
          <Label>Email</Label>
          <Input
            placeholder='email@example.com'
            type='text'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleClick}>Reset</Button>
          <NavLink to='/'>Back to Homepage</NavLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default ForgotPassword;
