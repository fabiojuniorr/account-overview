import {BoldText, UploadDetails} from "./styles";
import PropTypes from "prop-types";

export const SalesUploadDetails = ({ salesOverview }) => {
  return (
      <UploadDetails>
        <p>You had <BoldText>{salesOverview.uploads} uploads</BoldText> and <BoldText>{salesOverview.linesSaved}</BoldText> lines added.</p>
      </UploadDetails>
  )
}

SalesUploadDetails.propTypes = {
  salesOverview: PropTypes.shape({
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    })
  }).isRequired,
};

export default SalesUploadDetails;