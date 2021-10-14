import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { Container } from './HomeStyles'
import { userChartData } from '../../data'

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userChartData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
    </Container>
  )
}

export default Home
