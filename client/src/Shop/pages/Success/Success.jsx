import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router';
import { userRequest } from '../../../requestMethods';

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const createOrder = async () => {
      try {
        await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
      } catch (err) {
        console.log(err);
      }
    };
    data && createOrder();
    history.push('/purchase');
  }, [cart, data, currentUser, history]);

  return <></>;
};

export default Success;
