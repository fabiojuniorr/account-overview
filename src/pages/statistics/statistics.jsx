import {StatisticsBox} from "./styles";
import Statistic from "./statistic";

export const Statistics = () => {
  return (
      <StatisticsBox>
          <Statistic
              title='Upload success'
              percent='0%'
              leftRadius={5}
              rightRadius={0}
          />
          <Statistic
              title='Lines saved'
              percent='0%'
              leftRadius={0}
              rightRadius={5}
          />
       </StatisticsBox>
  )
}

export default Statistics;