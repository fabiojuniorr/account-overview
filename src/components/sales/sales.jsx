import {Container} from "./styles";
import SalesUpload from "./sales-upload";
import SalesUploadDetails from "./sales-upload-details";
import PropTypes from "prop-types";

const Sales = ({salesOverview, onSalesOverviewChange}) => {

  return (
      <Container>
        <SalesUpload
            salesOverview={salesOverview}
            onSalesOverviewChange={onSalesOverviewChange}
        />
        <SalesUploadDetails
            salesOverview={salesOverview}
        />
      </Container>
  );
}

Sales.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number,
    successfulUploads: PropTypes.number,
    linesAttempted: PropTypes.number,
    linesSaved: PropTypes.number,
    lastUploadDate: PropTypes.number,
  }).isRequired,
  onSalesOverviewChange: PropTypes.func.isRequired,
};

export default Sales;