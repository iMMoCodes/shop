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
import Account from './pages/Account/Account'
import Wishlist from './pages/Wishlist/Wishlist'

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
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route path='/account'>
          <Account />
        </Route>
        <Route path='/wishlist'>
          <Wishlist />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
