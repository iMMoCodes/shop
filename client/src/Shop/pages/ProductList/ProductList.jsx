import Navbar from '../../Components/Navbar/Navbar';
import Announcement from '../../Components/Announcement/Announcement';
import Products from '../../Components/Products/Products';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Footer from '../../Components/Footer/Footer';
import { useLocation } from 'react-router';
import { useState } from 'react';
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from './ProductListStyles';

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  console.log(filters);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    if (value === 'Sizes') {
      delete filters.size;
      setFilters({
        ...filters,
      });
    }
    if (value === 'Colors') {
      delete filters.color;
      setFilters({
        ...filters,
      });
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option value='Colors'>All</Option>
            <Option value='white'>White</Option>
            <Option value='black'>Black</Option>
            <Option value='red'>Red</Option>
            <Option value='blue'>Blue</Option>
            <Option value='yellow'>Yellow</Option>
            <Option value='green'>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option value='Sizes'>All</Option>
            <Option value='XS'>XS</Option>
            <Option value='S'>S</Option>
            <Option value='M'>M</Option>
            <Option value='L'>L</Option>
            <Option value='XL'>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
