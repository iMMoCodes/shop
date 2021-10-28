import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
// CLIENT SIDE
import Home from './Shop/pages/Home/Home';
import ProductList from './Shop/pages/ProductList/ProductList';
import Product from './Shop/pages/Product/Product';
import Register from './Shop/pages/Register/Register';
import Login from './Shop/pages/Login/Login';
import Cart from './Shop/pages/Cart/Cart';
import Success from './Shop/pages/Success/Success';
import AccountDetails from './Shop/pages/AccountDetails/AccountDetails';
import Wishlist from './Shop/pages/Wishlist/Wishlist';
import Error from './Shop/pages/Error/Error';
import AccountSecurity from './Shop/pages/AccountSecurity/AccountSecurity';
import AccountOrders from './Shop/pages/AccountOrders/AccountOrders';
import AccountNewsletter from './Shop/pages/AccountNewsletter/AccountNewsletter';
import Purchase from './Shop/pages/Purchase/Purchase';
import ScrollToTop from './ScrollToTop';
import ForgotPassword from './Shop/pages/ForgotPassword/ForgotPassword';
import PasswordReset from './Shop/pages/PasswordReset/PasswordReset';
// ADMIN SIDE
import Admin from './Admin/Pages/Home/Home';
import UserList from './Admin/Pages/UserList/UserList';
import User from './Admin/Pages/User/User';
import CreateUser from './Admin/Pages/CreateUser/CreateUser';
import AdminProductList from './Admin/Pages/ProductList/ProductList';
import AdminProduct from './Admin/Pages/Product/Product';
import CreateProduct from './Admin/Pages/CreateProduct/CreateProduct';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <Router>
      <ScrollToTop />
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
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
        <Route path='/purchase'>
          <Purchase />
        </Route>
        <Route path='/forgotPassword'>
          <ForgotPassword />
        </Route>
        <Route path='/resetPassword/:token'>
          <PasswordReset />
        </Route>
        <Route path='/account/details'>
          {user ? <AccountDetails /> : <Redirect to='/' />}
        </Route>
        <Route path='/account/security'>
          {user ? <AccountSecurity /> : <Redirect to='/' />}
        </Route>
        <Route path='/account/orders'>
          {user ? <AccountOrders /> : <Redirect to='/' />}
        </Route>
        <Route path='/account/newsletter'>
          {user ? <AccountNewsletter /> : <Redirect to='/' />}
        </Route>
        <Route path='/wishlist'>
          {user ? <Wishlist /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin' exact>
          {admin ? <Admin /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/users'>
          {admin ? <UserList /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/user/:userId'>
          {admin ? <User /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/createuser'>
          {admin ? <CreateUser /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/products'>
          {admin ? <AdminProductList /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/product/:productId'>
          {admin ? <AdminProduct /> : <Redirect to='/' />}
        </Route>
        <Route path='/admin/createproduct'>
          {admin ? <CreateProduct /> : <Redirect to='/' />}
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
