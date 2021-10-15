import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid'
import { Container, Product, Image, Button } from './ProductListStyles'
import { NavLink } from '../../AppStyles'
import { DeleteOutline } from '@material-ui/icons'
import { deleteProduct, getProducts } from '../../redux/apiCalls'

const ProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch])

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 230 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <Product>
            <Image src={params.row.image} alt='Product' />
            {params.row.title}
          </Product>
        )
      },
    },
    { field: 'inStock', headerName: 'In Stock', width: 140 },
    {
      field: 'price',
      headerName: 'Price (€)',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={`/product/${params.row._id}`}>
              <Button>Edit</Button>
            </NavLink>
            <DeleteOutline
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <Container>
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  )
}

export default ProductList
