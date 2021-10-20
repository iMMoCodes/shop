import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import {
  Container,
  Divider,
  Right,
  Title,
  Wrapper,
} from './AccountNewsletterStyles'

const AccountOrders = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Right>
          <Title>Newsletter</Title>
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  )
}

export default AccountOrders
