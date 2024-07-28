import {Box, HiddenInput, Title, UploadIcon} from "./styles";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const SalesUpload = () => {

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
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
              ref={fileInputRef}
          />
          <Title>Sales</Title>
        </div>
        <FontAwesomeIcon icon={faInfoCircle} color='#bfbbbb' aria-label="Info"/>
      </Box>
  )
}

export default SalesUpload;