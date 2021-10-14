import {
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  EuroSymbol,
  Home,
  MailOutline,
  PersonOutline,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons'
import {
  Container,
  Wrapper,
  List,
  ListItem,
  Menu,
  Title,
} from './SidebarStyles'
const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem>
              <Home style={{ marginRight: '5px' }} />
              Home
            </ListItem>
            <ListItem>
              <Timeline style={{ marginRight: '5px' }} />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ marginRight: '5px' }} />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <PersonOutline style={{ marginRight: '5px' }} />
              Users
            </ListItem>
            <ListItem>
              <Storefront style={{ marginRight: '5px' }} />
              Products
            </ListItem>
            <ListItem>
              <EuroSymbol style={{ marginRight: '5px' }} />
              Transactions
            </ListItem>
            <ListItem>
              <BarChart style={{ marginRight: '5px' }} />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline style={{ marginRight: '5px' }} />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{ marginRight: '5px' }} />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline style={{ marginRight: '5px' }} />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline style={{ marginRight: '5px' }} />
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{ marginRight: '5px' }} />
              Analytics
            </ListItem>
            <ListItem>
              <Report style={{ marginRight: '5px' }} />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  )
}

export default Sidebar
