import {Container} from "./styles";
import Statistic from "./statistic";

export const Statistics = () => {
  return (
      <Container>
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
       </Container>
  )
}

export default Statistics;