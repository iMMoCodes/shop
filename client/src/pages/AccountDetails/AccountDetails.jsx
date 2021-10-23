import React, { useState, useRef, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import { updateMe } from '../../redux/apiCalls';
import {
  Button,
  ButtonDiv,
  Container,
  Divider,
  ErrorMessage,
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
} from './AccountDetailsStyles';
import { ArrowUpward } from '@material-ui/icons';
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const AccountDetails = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const user = useSelector((state) => state.user.currentUser);
  const emailError = useSelector((state) => state.user?.error?.email);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
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

  const handleClick = (e) => {
    e.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

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
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
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
            const updatedUser = { ...inputs, image: downloadURL };
            updateMe(dispatch, updatedUser);
            setOpen(true);
          });
        }
      );
    } else {
      updateMe(dispatch, { ...inputs });
      setOpen(true);
    }
    firstNameRef.current.value = null;
    lastNameRef.current.value = null;
    emailRef.current.value = null;
    setInputs({});
  };

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
                    ref={firstNameRef}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label>Last Name</Label>
                  <Input
                    type='text'
                    placeholder={user.lastName}
                    name='lastName'
                    ref={lastNameRef}
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem>
                  <Label>Image</Label>
                  <Image
                    src={user.image || '/blankprofile.png'}
                    alt='user photo'
                  />
                  <Input
                    type='file'
                    id='file'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormItem>
              </Form>
            </Info>
            <ButtonDiv>
              <Button onClick={handleClick}>Update</Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  Profile updated succesfully!
                </Alert>
              </Snackbar>
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
                    ref={emailRef}
                    onChange={handleChange}
                  />
                  {emailError && (
                    <ErrorMessage>
                      <ArrowUpward />
                      {emailError.message}
                    </ErrorMessage>
                  )}
                </FormItem>
              </Form>
            </Info>
            <ButtonDiv>
              <Button onClick={handleClick} extraMargin>
                Update
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  Profile updated succesfully!
                </Alert>
              </Snackbar>
            </ButtonDiv>
          </Right>
        </Wrapper>
        <Divider />
        <Footer />
      </Container>
    </>
  );
};

export default AccountDetails;
