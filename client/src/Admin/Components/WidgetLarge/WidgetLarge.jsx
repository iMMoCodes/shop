import { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import { userRequest } from '../../../requestMethods';
import {
  Container,
  // Image,
  Name,
  Table,
  User,
  Th,
  Title,
  Tr,
  Date,
  Amount,
  Status,
  Btn,
} from './WidgetLargeStyles';

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('/orders', {
          withCredentials: true,
        });
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <Btn txt={type}>{type}</Btn>;
  };

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Tr key={order._id}>
              <User>
                <Name>{order.userId}</Name>
              </User>
              <Date>{format(order.createdAt)}</Date>
              <Amount>{order.amount} €</Amount>
              <Status>
                <Button type={order.status}></Button>
              </Status>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WidgetLarge;
