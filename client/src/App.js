import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home/Home'
import ProductList from './pages/ProductList/ProductList'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Cart from './pages/Cart/Cart'
import Success from './pages/Success/Success'
import AccountDetails from './pages/AccountDetails/AccountDetails'
import Wishlist from './pages/Wishlist/Wishlist'
import Error from './pages/Error/Error'

const App = () => {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/products/:category'>
          <ProductList />
        </Route>
        <Route path='/product/:productId'>
          <Product />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/account/details'>
          {user ? <AccountDetails /> : <Redirect to='/' />}
        </Route>
        <Route path='/wishlist'>
          <Wishlist />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
