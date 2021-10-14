import { Publish } from '@material-ui/icons'
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Option,
  Select,
  Title,
  UploadLabel,
} from './CreateProductStyles'

const CreateProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <UploadLabel for='file'>
            <Publish style={{ marginLeft: '4px', fontSize: '22px' }} />
            &nbsp;Upload Image
          </UploadLabel>
          <Input type='file' id='file' style={{ display: 'none' }} />
        </Item>
        <Item>
          <Label>Name</Label>
          <Input type='text' placeholder='Product name' />
        </Item>
        <Item>
          <Label>Stock</Label>
          <Input type='text' placeholder='123' />
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name='active' id='active'>
            <Option value='yes'>Yes</Option>
            <Option value='no'>No</Option>
          </Select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  )
}

export default CreateProduct
