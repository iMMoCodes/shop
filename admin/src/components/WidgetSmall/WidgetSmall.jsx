import { useEffect, useState } from 'react'
import {
  Button,
  Container,
  // Desc,
  Image,
  List,
  ListItem,
  Name,
  Title,
  User,
} from './WidgetSmallStyles'
import { Visibility } from '@material-ui/icons'
import { userRequest } from '../../requestMethods'
const WidgetSmall = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/users/?new=true')
        setUsers(res.data.users)
      } catch (err) {
        console.log(err)
      }
    }
    getUsers()
  }, [])

  return (
    <Container>
      <Title>Newest Members</Title>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <Image src={user.img || './blankprofile.png'} alt='User' />
            <User>
              <Name>{user.username}</Name>
              {/* <Desc>Something here</Desc> */}
            </User>
            <Button>
              <Visibility style={{ fontSize: '16px', marginRight: '5px' }} />{' '}
              Display
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default WidgetSmall
