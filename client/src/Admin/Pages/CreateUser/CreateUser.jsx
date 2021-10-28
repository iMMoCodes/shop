import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../../firebase';
import { Publish } from '@material-ui/icons';
import { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Gender,
  Input,
  Item,
  Label,
  Option,
  RadioLabel,
  Select,
  Title,
  UploadLabel,
} from './CreateUserStyles';
import { userRequest } from '../../../requestMethods';

const CreateUser = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);

  const createUser = async (user) => {
    try {
      await userRequest.post(`/auth/register`, user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = (e) => {
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
            createUser(updatedUser);
          });
        }
      );
    } else {
      createUser({ ...inputs });
    }
  };

  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input
            type='text'
            name='username'
            placeholder='Username'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>First Name</Label>
          <Input
            type='text'
            name='firstName'
            placeholder='First Name'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Last Name</Label>
          <Input
            type='text'
            name='lastName'
            placeholder='Last Name'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input
            type='email'
            name='email'
            placeholder='example@email.com'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input
            type='password'
            name='password'
            placeholder='********'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Confirm Password</Label>
          <Input
            type='password'
            name='passwordConfirm'
            placeholder='********'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input
            type='text'
            name='phoneNumber'
            placeholder='+1 234 567'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input
            type='text'
            name='address'
            placeholder='Location | Place'
            onChange={handleChange}
          />
        </Item>
        <Item>
          <Label>Gender</Label>
          <Gender>
            <Input
              type='radio'
              name='gender'
              id='male'
              value='male'
              onChange={handleChange}
            />
            <RadioLabel htmlFor='male'>Male</RadioLabel>
            <Input
              type='radio'
              name='gender'
              id='female'
              value='female'
              onChange={handleChange}
            />
            <RadioLabel htmlFor='female'>Female</RadioLabel>
          </Gender>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name='active' id='active' onChange={handleChange}>
            <Option value={true}>Yes</Option>
            <Option value={false}>No</Option>
          </Select>
        </Item>
        <Item>
          <Label>Image</Label>
          <UploadLabel htmlFor='file'>
            <Publish style={{ marginLeft: '4px', fontSize: '22px' }} />
            &nbsp;Upload Image
          </UploadLabel>
          <Input
            type='file'
            id='file'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Item>
        <Button onClick={handleCreate}>Create</Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
