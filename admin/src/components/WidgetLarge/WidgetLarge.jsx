import {
  Container,
  Image,
  Name,
  Table,
  User,
  Th,
  Title,
  Tr,
  Date,
  Amount,
  Status,
  Btn,
} from './WidgetLargeStyles'

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <Btn txt={type}>{type}</Btn>
  }

  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <thead>
          <Tr>
            <Th>Customer</Th>
            <Th>Date</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <User>
              <Image src='./test-person.jpeg' alt='User' />
              <Name>Test Person</Name>
            </User>
            <Date>10 Sep 2021</Date>
            <Amount>122.00 €</Amount>
            <Status>
              <Button type='Approved'></Button>
            </Status>
          </Tr>
          <Tr>
            <User>
              <Image src='./test-person.jpeg' alt='User' />
              <Name>Test Person</Name>
            </User>
            <Date>10 Sep 2021</Date>
            <Amount>122.00 €</Amount>
            <Status>
              <Button type='Declined'></Button>
            </Status>
          </Tr>
          <Tr>
            <User>
              <Image src='./test-person.jpeg' alt='User' />
              <Name>Test Person</Name>
            </User>
            <Date>10 Sep 2021</Date>
            <Amount>122.00 €</Amount>
            <Status>
              <Button type='Pending'></Button>
            </Status>
          </Tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default WidgetLarge
