import {
  BoldText,
  Container,
  HiddenInput,
  Title,
  Upload,
  UploadDetails,
  UploadIcon
} from "./styles";
import {faInfoCircle, faUpload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef} from "react";

const Sales = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
      <Container>
        <Upload>
          <div>
            <UploadIcon icon={faUpload} onClick={handleUploadClick} aria-label="Upload file" />
            <HiddenInput type="file" ref={fileInputRef} />
            <Title>Sales</Title>
          </div>
          <FontAwesomeIcon icon={faInfoCircle} color='#bfbbbb' aria-label="Info" />
        </Upload>
        <UploadDetails>
          <p>You had <BoldText>0 uploads</BoldText> and <BoldText>0</BoldText> lines added.</p>
        </UploadDetails>
      </Container>
  );
}

export default Sales;