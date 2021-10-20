import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { userRequest } from '../../requestMethods'
import {
  Amount,
  Btn,
  Container,
  Date,
  Divider,
  OrderId,
  Right,
  Status,
  SubTitle,
  Table,
  Th,
  Title,
  Tr,
  Wrapper,
} from './AccountOrdersStyles'

const AccountOrders = () => {
  const user = useSelector((state) => state.user.currentUser)
  const [orders, setOrders] = useState([])

  const getOrders = useCallback(async () => {
    try {
      const res = await userRequest.get(`/orders/find/${user._id}`, {
        withCredentials: true,
      })
      setOrders(res.data)
    } catch (err) {}
  }, [user._id])

  const Button = ({ type }) => {
    return <Btn txt={type}>{type}</Btn>
  }

  console.log(orders)

  useEffect(() => {
    getOrders()
  }, [getOrders])

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Right>
          <Title>My Orders</Title>
          {orders.length === 0 ? (
            <SubTitle>You don't have any orders yet.</SubTitle>
          ) : (
            <Table>
              <thead>
                <Tr>
                  <Th>Order ID</Th>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Status</Th>
                </Tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <>
                    <Tr>
                      <OrderId>{order._id}</OrderId>
                      <Date>{order.createdAt.substring(0, 10)}</Date>
                      <Amount>{order.amount} €</Amount>
                      <Status>
                        <Button type={order.status}></Button>
                      </Status>
                    </Tr>
                  </>
                ))}
              </tbody>
            </Table>
          )}
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  )
}

export default AccountOrders
