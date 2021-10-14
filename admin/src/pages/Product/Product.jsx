import { Link } from 'react-router-dom'
import { Publish } from '@material-ui/icons'
import {
  AddButton,
  Bottom,
  Container,
  Title,
  TitleContainer,
  Top,
  InfoBottom,
  InfoTop,
  TopLeft,
  TopRight,
  Image,
  Name,
  InfoItem,
  InfoKey,
  InfoValue,
  Form,
  FormLeft,
  FormRight,
  Label,
  Input,
  Select,
  Option,
  Upload,
  Button,
  UploadImage,
} from './ProductStyles'
import Chart from '../../components/Chart/Chart'
import { productChartData } from '../../data'

const Product = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link
          to='/createproduct'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <Top>
        <TopLeft>
          <Chart
            data={productChartData}
            dataKey='Sales'
            title='Sales Performance'
          />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <Image
              src='https://images.pexels.com/photos/7397170/pexels-photo-7397170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              alt='product'
            />
            <Name>Product name</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoKey>id:</InfoKey>
              <InfoValue>123</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>sales:</InfoKey>
              <InfoValue>4238</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>active:</InfoKey>
              <InfoValue>yes</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoKey>in stock:</InfoKey>
              <InfoValue>no</InfoValue>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <Label>Product Name</Label>
            <Input type='text' placeholder='Product' />
            <Label>In Stock</Label>
            <Select name='inStock' id='idStock'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
            <Label>Active</Label>
            <Select name='active' id='active'>
              <Option value='yes'>Yes</Option>
              <Option value='no'>No</Option>
            </Select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImage
                src='https://images.pexels.com/photos/7397170/pexels-photo-7397170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='product'
              />
              <Label for='file'>
                <Publish />
              </Label>
              <Input type='file' id='file' style={{ display: 'none' }} />
            </Upload>
            <Button>Update</Button>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  )
}

export default Product
