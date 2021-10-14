import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from './AppStyles'
import Topbar from './components/Topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import UserList from './pages/UserList/UserList'
import User from './pages/User/User'

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users'>
            <UserList />
          </Route>
          <Route path='/user/:userId'>
            <User />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
