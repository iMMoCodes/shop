import { NavLink } from '../../AppStyles'
import { Container, Image, Info, Title, Button } from './CategoryItemStyles'

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </NavLink>
    </Container>
  )
}

export default CategoryItem
