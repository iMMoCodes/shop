import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../../firebase';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import {
  Bottom,
  BottomTitle,
  Container,
  Desc,
  Form,
  Image,
  InfoTitle,
  Input,
  ItemTitle,
  Left,
  Right,
  Show,
  Title,
  TitleContainer,
  Top,
  TopTitle,
  Update,
  UpdateButton,
  UpdateImage,
  UpdateInput,
  UpdateItem,
  UpdateLabel,
  UpdateTitle,
  Upload,
  UserContainer,
  UserInfo,
  Username,
  Wrapper,
} from './UserStyles';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useCallback, useEffect, useState } from 'react';
import { userRequest } from '../../../requestMethods';
import { useLocation } from 'react-router';

const User = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({});

  const getUser = useCallback(async () => {
    try {
      const res = await userRequest.get(`/users/find/${id}`, {
        withCredentials: true,
      });
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const updateUser = async (user) => {
    try {
      await userRequest.patch(`/users/${id}`, user, {
        withCredentials: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdate = (e) => {
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
            updateUser(updatedUser);
          });
        }
      );
    } else {
      updateUser({ ...inputs });
    }
  };

  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Wrapper>
          <TitleContainer>
            <Title>Edit User</Title>
          </TitleContainer>
          <UserContainer>
            <Show>
              <Top>
                <Image src={user.image} alt='User' />
                <TopTitle>
                  <Username>{user.username}</Username>
                  <Desc>
                    {user.firstName} {user.lastName}
                  </Desc>
                </TopTitle>
              </Top>
              <Bottom>
                <BottomTitle>Account Details</BottomTitle>
                <UserInfo>
                  <PermIdentity style={{ fontSize: '16px' }} />
                  <InfoTitle>{user.username}</InfoTitle>
                </UserInfo>
                <UserInfo>
                  <CalendarToday style={{ fontSize: '16px' }} />
                  <InfoTitle>20.11.1995</InfoTitle>
                </UserInfo>
                <BottomTitle>Contact Details</BottomTitle>
                <UserInfo>
                  <PhoneAndroid style={{ fontSize: '16px' }} />
                  <InfoTitle>{user.phoneNumber}</InfoTitle>
                </UserInfo>
                <UserInfo>
                  <MailOutline style={{ fontSize: '16px' }} />
                  <InfoTitle>{user.email}</InfoTitle>
                </UserInfo>
                <UserInfo>
                  <LocationSearching style={{ fontSize: '16px' }} />
                  <InfoTitle>{user.address}</InfoTitle>
                </UserInfo>
              </Bottom>
            </Show>
            <Update>
              <UpdateTitle>Edit</UpdateTitle>
              <Form>
                <Left>
                  <UpdateItem>
                    <ItemTitle>Username</ItemTitle>
                    <Input
                      type='text'
                      name='username'
                      placeholder={user.username}
                      onChange={handleChange}
                    />
                  </UpdateItem>
                  <UpdateItem>
                    <ItemTitle>First Name</ItemTitle>
                    <Input
                      type='text'
                      name='firstName'
                      placeholder={user.firstName}
                      onChange={handleChange}
                    />
                  </UpdateItem>
                  <UpdateItem>
                    <ItemTitle>Last Name</ItemTitle>
                    <Input
                      type='text'
                      name='lastName'
                      placeholder={user.lastName}
                      onChange={handleChange}
                    />
                  </UpdateItem>
                  <UpdateItem>
                    <ItemTitle>Email</ItemTitle>
                    <Input
                      type='text'
                      name='email'
                      placeholder={user.email}
                      onChange={handleChange}
                    />
                  </UpdateItem>
                  <UpdateItem>
                    <ItemTitle>Phone</ItemTitle>
                    <Input
                      type='text'
                      name='phoneNumber'
                      placeholder={user.phoneNumber}
                    />
                  </UpdateItem>
                  <UpdateItem>
                    <ItemTitle>Address</ItemTitle>
                    <Input
                      type='text'
                      name='address'
                      placeholder={user.address}
                    />
                  </UpdateItem>
                </Left>
                <Right>
                  <Upload>
                    <UpdateImage src={user.image} alt='User' />
                    <UpdateLabel htmlFor='file'>
                      <Publish style={{ cursor: 'pointer' }} />
                    </UpdateLabel>
                    <UpdateInput
                      type='file'
                      id='file'
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </Upload>
                  <UpdateButton onClick={handleUpdate}>Update</UpdateButton>
                </Right>
              </Form>
            </Update>
          </UserContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default User;
