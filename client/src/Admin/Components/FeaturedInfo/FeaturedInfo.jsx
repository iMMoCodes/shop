import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { userRequest } from '../../../requestMethods';
import {
  Container,
  Item,
  Money,
  MoneyContainer,
  MoneyRate,
  SubTitle,
  Title,
} from './FeaturedInfoStyles';

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/orders/income', {
          withCredentials: true,
        });
        setIncome(res.data);
        setPercentage((res.data[1].total / res.data[0].total - 1) * 100);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);

  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>{income[1]?.total} €</Money>
          <MoneyRate>
            {Math.floor(percentage)} %
            {percentage < 0 ? (
              <ArrowDownward
                style={{ fontSize: '14px', marginLeft: '5px', color: 'red' }}
              />
            ) : (
              <ArrowUpward
                style={{ fontSize: '14px', marginLeft: '5px', color: 'green' }}
              />
            )}
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
  );
};

export default FeaturedInfo;
