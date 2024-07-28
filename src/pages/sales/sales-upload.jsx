import {Box, HiddenInput, Title, UploadIcon} from "./styles";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

export const SalesUpload = ({salesOverview, onSalesOverviewChange}) => {

  const fileReader = new FileReader();
  const fileInputRef = useRef(null);

  const handleUploadClick = (event) => {
    fileInputRef.current.click();
  };

  const handleOpenFile = (event) => {
    const file = event.target.files[0];

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result.trim();
        const lines = text.split("\n").slice(1);

        const validLines = lines.filter(line => {
          const columns = line.split(",");
          return columns.every(column => column.trim() !== "");
        });

        const linesAttempted = lines.length;
        const linesSaved = validLines.length;
        const successfulUploads = linesSaved > 0 ? 1 : 0;

        onSalesOverviewChange({
          ...salesOverview,
          uploads: salesOverview.uploads + 1,
          successfulUploads: salesOverview.successfulUploads + successfulUploads,
          linesAttempted: salesOverview.linesAttempted + linesAttempted,
          linesSaved: salesOverview.linesSaved + linesSaved,
          lastUploadDate: Date.now(),
        });
      };

      fileReader.readAsText(file);
    }
  };

  return (
      <Box>
        <div>
          <UploadIcon
              icon={faUpload}
              onClick={handleUploadClick}
              aria-label="Upload file"
          />
          <HiddenInput
              type="file"
              accept=".csv"
              ref={fileInputRef}
              onChange={handleOpenFile}
          />
          <Title>Sales</Title>
        </div>
        <FontAwesomeIcon icon={faInfoCircle} color='#bfbbbb' aria-label="Info"/>
      </Box>
  )
}

SalesUpload.propTypes = {
  salesOverview: PropTypes.shape({
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    })
  }).isRequired,
  onSalesOverviewChange: PropTypes.func.isRequired,
};

export default SalesUpload;
