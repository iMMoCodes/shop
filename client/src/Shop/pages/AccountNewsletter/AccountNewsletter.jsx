import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import Switch from '@mui/material/Switch'
import {
  Container,
  Divider,
  NewsLetterOrder,
  NewsLetterOrderText,
  Right,
  SwitchText,
  SwitchTextDiv,
  Title,
  Wrapper,
} from './AccountNewsletterStyles'

const AccountOrders = () => {
  const [checked, setChecked] = useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Right>
          <Title>Newsletter</Title>
          <NewsLetterOrder>
            <NewsLetterOrderText>Do you want newsletters?</NewsLetterOrderText>
            <SwitchTextDiv>
              <SwitchText>No</SwitchText>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <SwitchText>Yes</SwitchText>
            </SwitchTextDiv>
          </NewsLetterOrder>
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  )
}

export default AccountOrders
