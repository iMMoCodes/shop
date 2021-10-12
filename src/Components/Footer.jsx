import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
  display: flex;
  ${tablet({ flexDirection: 'column' })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${tablet({ alignItems: 'center' })}
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
  ${tablet({ justifyContent: 'center' })}
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({ display: 'none' })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({ backgroundColor: '#dedede' })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
  height: 10%;
  ${tablet({ height: '50px' })}
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ImmoStore</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime
          error perspiciatis nostrum. Corporis sequi maxime consequatur quod
          molestiae, quis laboriosam facere earum labore nemo.
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          Example address , Somewhere 99999
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          Contact@example.com
        </ContactItem>
        <Payment src='https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
      </Right>
    </Container>
  )
}

export default Footer
