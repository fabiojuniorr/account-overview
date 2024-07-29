import {Container} from "./styles";
import Statistic from "./statistic";
import PropTypes from "prop-types";

export const Statistics = ({salesOverview}) => {

  const { uploads, successfulUploads, linesAttempted, linesSaved } = salesOverview;
  const percentUploadSucess = uploads > 0 ? ((successfulUploads / uploads) * 100).toFixed(1) : '0.0';
  const percentLinesSaved = linesAttempted > 0 ? ((linesSaved / linesAttempted) * 100).toFixed(1) : '0.0';

  return (
      <Container data-testid='statistics'>
          <Statistic
              title='Upload success'
              percent={`${percentUploadSucess}%`}
              leftRadius={5}
              rightRadius={0}
              data-testid="upload-success-statistic"
          />
          <Statistic
              title='Lines saved'
              percent={`${percentLinesSaved}%`}
              leftRadius={0}
              rightRadius={5}
              data-testid="lines-saved-statistic"
          />
       </Container>
  )
}

Statistics.propTypes = {
  salesOverview: PropTypes.shape({
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    })
  }).isRequired
};

export default Statistics;