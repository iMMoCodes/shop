import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { userRequest } from '../../../requestMethods';
import { NavLink } from '../../../AppStyles';
import { Publish } from '@material-ui/icons';
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
  Wrapper,
} from './ProductStyles';
import Chart from '../../Components/Chart/Chart';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [productStats, setProductStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get(`/orders/income?pid=${productId}`);
        res.data.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Wrapper>
          <TitleContainer>
            <Title>Product</Title>
            <NavLink
              to='/admin/createproduct'
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <AddButton>Create</AddButton>
            </NavLink>
          </TitleContainer>
          <Top>
            <TopLeft>
              <Chart
                data={productStats}
                dataKey='Sales'
                title='Sales Performance'
              />
            </TopLeft>
            <TopRight>
              <InfoTop>
                <Image src={product?.image} alt='product' />
                <Name>{product?.title}</Name>
              </InfoTop>
              <InfoBottom>
                <InfoItem>
                  <InfoKey>Id:</InfoKey>
                  <InfoValue>{product?._id}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>Sales:</InfoKey>
                  <InfoValue>4238</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoKey>In stock:</InfoKey>
                  <InfoValue>{product?.inStock ? 'Yes' : 'No'}</InfoValue>
                </InfoItem>
              </InfoBottom>
            </TopRight>
          </Top>
          <Bottom>
            <Form>
              <FormLeft>
                <Label>Title</Label>
                <Input type='text' placeholder={product?.title} />
                <Label>Description</Label>
                <Input type='text' placeholder={product?.desc} />
                <Label>Price</Label>
                <Input type='text' placeholder={product?.price} />
                <Label>In Stock</Label>
                <Select name='inStock' id='idStock'>
                  <Option value='true'>Yes</Option>
                  <Option value='false'>No</Option>
                </Select>
              </FormLeft>
              <FormRight>
                <Upload>
                  <UploadImage src={product?.image} alt='product' />
                  <Label htmlFor='file'>
                    <Publish />
                  </Label>
                  <Input type='file' id='file' style={{ display: 'none' }} />
                </Upload>
                <Button>Update</Button>
              </FormRight>
            </Form>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Product;
