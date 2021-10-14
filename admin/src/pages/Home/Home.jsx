import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import { Container, Widget } from './HomeStyles'
import { userChartData } from '../../data'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'

const Home = () => {
  return (
    <>
      <Container>
        <FeaturedInfo />
        <Chart
          data={userChartData}
          title='User Analytics'
          grid
          dataKey='Active User'
        />
        <Widget>
          <WidgetSmall />
          <WidgetLarge />
        </Widget>
      </Container>
    </>
  )
}

export default Home
