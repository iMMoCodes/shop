import { Publish } from '@material-ui/icons'
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
} from './CreateUserStyles'

const CreateUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type='text' placeholder='testperson123' />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type='text' placeholder='Test Person' />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type='email' placeholder='test@example.com' />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type='password' placeholder='********' />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type='text' placeholder='+1 234 567' />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type='text' placeholder='Location | Place' />
        </Item>
        <Item>
          <Label>Gender</Label>
          <Gender>
            <Input type='radio' name='gender' id='male' value='male' />
            <RadioLabel for='male'>Male</RadioLabel>
            <Input type='radio' name='gender' id='female' value='female' />
            <RadioLabel for='female'>Female</RadioLabel>
          </Gender>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name='active' id='active'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </Select>
        </Item>
        <Item>
          <Label>Image</Label>
          <UploadLabel for='file'>
            <Publish style={{ marginLeft: '4px', fontSize: '22px' }} />
            &nbsp;Upload Image
          </UploadLabel>
          <Input type='file' id='file' style={{ display: 'none' }} />
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}

export default CreateUser
