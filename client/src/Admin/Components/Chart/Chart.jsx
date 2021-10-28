import { Container, Title } from './ChartStyles'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#2a22b1' />
          <Line type='monotone' dataKey={dataKey} stroke='#2a22b1' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dcdc' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart
