import { Link } from 'react-router-dom'
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons'
import {
  Bottom,
  BottomTitle,
  Button,
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
} from './UserStyles'

const User = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit User</Title>
        <Link to='/newuser'>
          <Button>Create</Button>
        </Link>
      </TitleContainer>
      <UserContainer>
        <Show>
          <Top>
            <Image src='/test-person.jpeg' alt='User' />
            <TopTitle>
              <Username>Test Person</Username>
              <Desc>Something here</Desc>
            </TopTitle>
          </Top>
          <Bottom>
            <BottomTitle>Account Details</BottomTitle>
            <UserInfo>
              <PermIdentity style={{ fontSize: '16px' }} />
              <InfoTitle>testperson123</InfoTitle>
            </UserInfo>
            <UserInfo>
              <CalendarToday style={{ fontSize: '16px' }} />
              <InfoTitle>20.11.1995</InfoTitle>
            </UserInfo>
            <BottomTitle>Contact Details</BottomTitle>
            <UserInfo>
              <PhoneAndroid style={{ fontSize: '16px' }} />
              <InfoTitle>+1 234 567</InfoTitle>
            </UserInfo>
            <UserInfo>
              <MailOutline style={{ fontSize: '16px' }} />
              <InfoTitle>test@example.com</InfoTitle>
            </UserInfo>
            <UserInfo>
              <LocationSearching style={{ fontSize: '16px' }} />
              <InfoTitle>Tampere, Finland</InfoTitle>
            </UserInfo>
          </Bottom>
        </Show>
        <Update>
          <UpdateTitle>Edit</UpdateTitle>
          <Form>
            <Left>
              <UpdateItem>
                <ItemTitle>Username</ItemTitle>
                <Input type='text' placeholder='testperson123' />
              </UpdateItem>
              <UpdateItem>
                <ItemTitle>Full Name</ItemTitle>
                <Input type='text' placeholder='Test Person' />
              </UpdateItem>
              <UpdateItem>
                <ItemTitle>Email</ItemTitle>
                <Input type='text' placeholder='test@example.com' />
              </UpdateItem>
              <UpdateItem>
                <ItemTitle>Phone</ItemTitle>
                <Input type='text' placeholder='+1 234 567' />
              </UpdateItem>
              <UpdateItem>
                <ItemTitle>Address</ItemTitle>
                <Input type='text' placeholder='Tampere, Finland' />
              </UpdateItem>
            </Left>
            <Right>
              <Upload>
                <UpdateImage src='/test-person.jpeg' alt='User' />
                <UpdateLabel htmlFor='file'>
                  <Publish style={{ cursor: 'pointer' }} />
                </UpdateLabel>
                <UpdateInput type='file' id='file' />
              </Upload>
              <UpdateButton>Update</UpdateButton>
            </Right>
          </Form>
        </Update>
      </UserContainer>
    </Container>
  )
}

export default User
