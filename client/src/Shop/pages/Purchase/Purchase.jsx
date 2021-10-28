import { Container, Title, SubTitle, Button } from './PurchaseStyles';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { NavLink } from '../../../AppStyles';

const Purchase = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Thank you for doing business with us!</Title>
        <SubTitle>Your order has been created successfully.</SubTitle>
        <SubTitle>You can follow your order from account page</SubTitle>
        <Button>
          <NavLink to='/account/orders'>Go there</NavLink>
        </Button>
      </Container>
      <Footer />
    </>
  );
};

export default Purchase;
