import { useEffect, useState } from 'react';
import { NavLink } from '../../../AppStyles';
import { Container, User, Image, Button, Wrapper } from './UserListStyles';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { userRequest } from '../../../requestMethods';
const UserList = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await userRequest.get('/users', {
      withCredentials: true,
    });
    setUsers(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const rows = users.map((user) => {
    return {
      id: user._id,
      username: user.username,
      image: user.image,
      email: user.email,
    };
  });

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 250,
    },
    {
      field: 'username',
      headerName: 'User',
      width: 250,
      renderCell: (params) => {
        return (
          <User>
            <Image src={params.row.image} alt='User' />
            {params.row.username}
          </User>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={`/admin/user/${params.row.id}`}>
              <Button>Edit</Button>
            </NavLink>
            <DeleteOutline
              style={{ color: 'red', cursor: 'pointer' }}
              // onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Wrapper>
          <DataGrid
            rows={rows}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default UserList;
