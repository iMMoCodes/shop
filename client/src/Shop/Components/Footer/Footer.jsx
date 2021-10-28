import { NavLink } from '../../../AppStyles';
import { useSelector } from 'react-redux';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import {
  Container,
  Left,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment,
} from './FooterStyles';

const Footer = () => {
  const user = useSelector((state) => state.user.currentUser);
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
          <ListItem>
            <NavLink to='/'>Home </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/cart'>Cart</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/products/men'>Men Fashion</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/products/women'>Women Fashion</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to='/products/accessories'>Accessories</NavLink>
          </ListItem>
          {user && (
            <>
              <ListItem>
                <NavLink to='/account/details'>Account</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/account/orders'>Order Tracking</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to='/wishlist'>Wishlist</NavLink>
              </ListItem>
            </>
          )}
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
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
