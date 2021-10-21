import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import Switch from '@mui/material/Switch'
import {
  Container,
  Divider,
  NewsLetterDiv,
  NewsLetterOrder,
  NewsLetterOrderText,
  NewsLetterText,
  NewsLetterTitle,
  Right,
  Subtitle,
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
          {checked && (
            <>
              <Subtitle>Latest Newsletter</Subtitle>
              <NewsLetterDiv>
                <NewsLetterTitle>Lorem ipsum dolor sit amet.</NewsLetterTitle>
                <NewsLetterText>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita, consequuntur molestias quibusdam consequatur ipsam,
                  doloribus ullam tempore iure provident at minima minus veniam
                  deserunt? At obcaecati officiis, impedit, earum iusto officia
                  consectetur repellat voluptatum hic iure voluptate. Ratione
                  nobis dignissimos quos laboriosam impedit officia, ipsa
                  corrupti delectus molestiae tempora voluptatibus suscipit,
                  quasi dolore quod atque esse ex nemo voluptatem cupiditate
                  placeat beatae rem! Libero nihil ullam mollitia id impedit. Ut
                  voluptas ipsa, reprehenderit alias ea quo. Minima animi nisi
                  corrupti, tenetur ab velit dolor officia quo id cupiditate
                  enim, voluptatum molestiae inventore iusto accusamus,
                  necessitatibus sint quaerat deserunt. Rerum, mollitia.
                </NewsLetterText>
              </NewsLetterDiv>
            </>
          )}
        </Right>
      </Wrapper>
      <Divider />
      <Footer />
    </Container>
  )
}

export default AccountOrders
