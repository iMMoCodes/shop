import {
  Button,
  Container,
  Desc,
  Image,
  List,
  ListItem,
  Name,
  Title,
  User,
} from './WidgetSmallStyles'
import { Visibility } from '@material-ui/icons'
const WidgetSmall = () => {
  return (
    <Container>
      <Title>Newest Members</Title>
      <List>
        <ListItem>
          <Image src='./test-person.jpeg' alt='User' />
          <User>
            <Name>Test Person</Name>
            <Desc>Something here</Desc>
          </User>
          <Button>
            <Visibility style={{ fontSize: '16px', marginRight: '5px' }} />{' '}
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='./test-person.jpeg' alt='User' />
          <User>
            <Name>Test Person</Name>
            <Desc>Something here</Desc>
          </User>
          <Button>
            <Visibility style={{ fontSize: '16px', marginRight: '5px' }} />{' '}
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src='./test-person.jpeg' alt='User' />
          <User>
            <Name>Test Person</Name>
            <Desc>Something here</Desc>
          </User>
          <Button>
            <Visibility style={{ fontSize: '16px', marginRight: '5px' }} />{' '}
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  )
}

export default WidgetSmall
