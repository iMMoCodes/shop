import Chart from '../../Components/Chart/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo';
import { Container, Widget, Wrapper } from './HomeStyles';
import WidgetSmall from '../../Components/WidgetSmall/WidgetSmall';
import WidgetLarge from '../../Components/WidgetLarge/WidgetLarge';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../../requestMethods';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
  const [userStats, setUserStats] = useState([]);

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
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats', {
          withCredentials: true,
        });
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Active User': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Wrapper>
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
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
