import { ArrowUpward } from '@material-ui/icons';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { updateMyPassword } from '../../redux/apiCalls';
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
} from './AccountSecurityStyles';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const AccountSecurity = () => {
  const [inputs, setInputs] = useState({});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user?.error);
  const success = useSelector((state) => state.user.success);
  const firstUpdate = useRef(true);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateMyPassword(dispatch, { ...inputs });
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    success && setOpen(true);
  }, [success]);

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
                {error?.message && (
                  <ErrorMessage>
                    <ArrowUpward />
                    {error?.message}
                  </ErrorMessage>
                )}
              </FormItem>
              <FormItem>
                <Label>New Password</Label>
                <Input
                  type='password'
                  placeholder='********'
                  name='password'
                  onChange={handleChange}
                />
                {error?.err?.errors?.password && (
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
                {error?.err?.errors?.passwordConfirm && (
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity='success'
                sx={{ width: '100%' }}
              >
                Password updated succesfully!
              </Alert>
            </Snackbar>
          </ButtonDiv>
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  );
};

export default AccountSecurity;
