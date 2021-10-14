import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import { Container, Widget } from './HomeStyles'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'
import { useEffect, useMemo, useState } from 'react'
import { userRequest } from '../../requestMethods'

const Home = () => {
  const [userStats, setUserStats] = useState([])

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  )

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats')
        res.data.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        )
      } catch (err) {
        console.log(err)
      }
    }
    getStats()
  }, [MONTHS])

  return (
    <>
      <Container>
        <FeaturedInfo />
        <Chart
          data={userStats}
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
