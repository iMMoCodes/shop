import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import {
  Container,
  Item,
  Money,
  MoneyContainer,
  MoneyRate,
  SubTitle,
  Title,
} from './FeaturedInfoStyles'

const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>3,655 €</Money>
          <MoneyRate>
            -13.5{' '}
            <ArrowDownward
              style={{ fontSize: '14px', marginLeft: '5px', color: 'red' }}
            />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>6,655 €</Money>
          <MoneyRate>
            -2.5{' '}
            <ArrowDownward
              style={{ fontSize: '14px', marginLeft: '5px', color: 'red' }}
            />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>1,255 €</Money>
          <MoneyRate>
            +13.5{' '}
            <ArrowUpward
              style={{ fontSize: '14px', marginLeft: '5px', color: 'green' }}
            />
          </MoneyRate>
        </MoneyContainer>
        <SubTitle>Compared to last month</SubTitle>
      </Item>
    </Container>
  )
}

export default FeaturedInfo
