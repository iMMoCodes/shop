import { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/apiCalls'
import { Container } from './ProductsStyles'

const Products = ({ category, filters, sort }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    category ? getProducts(dispatch, category) : getProducts(dispatch)
  }, [category, dispatch])

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      )
  }, [products, category, filters])

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 6)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  )
}

export default Products
