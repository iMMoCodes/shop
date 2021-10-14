import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, User, Image, Button } from './UserListStyles'
import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../data'
const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <User>
            <Image src={params.row.avatar} alt='User' />
            {params.row.username}
          </User>
        )
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 170,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutline
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <Container>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </Container>
  )
}

export default UserList
