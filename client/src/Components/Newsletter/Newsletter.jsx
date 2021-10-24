import { useState, forwardRef } from 'react';
import { publicRequest } from '../../requestMethods';
import { Send } from '@material-ui/icons';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from './NewsletterStyles';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await publicRequest.post('/users/newsletter', { email });
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dolores.
      </Description>
      <InputContainer>
        <Input
          type='email'
          name='email'
          placeholder='example@email.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button>
          <Send onClick={handleClick} />
        </Button>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            Newsletter sent!
          </Alert>
        </Snackbar>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
