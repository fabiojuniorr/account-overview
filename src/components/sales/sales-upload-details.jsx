import {BoldText, UploadDetails} from "./styles";
import PropTypes from "prop-types";

export const SalesUploadDetails = ({ salesOverview }) => {
  return (
      <UploadDetails data-testid="sales-upload-details">
        <p>You had <BoldText>{salesOverview.uploads} uploads</BoldText> and <BoldText>{salesOverview.linesSaved}</BoldText> lines added.</p>
      </UploadDetails>
  )
}

SalesUploadDetails.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number,
  }).isRequired,
};

export default SalesUploadDetails;