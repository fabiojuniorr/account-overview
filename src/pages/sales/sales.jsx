import {Container} from "./styles";
import SalesUpload from "./sales-upload";
import SalesUploadDetails from "./sales-upload-details";

const Sales = () => {


  return (
      <Container>
        <SalesUpload />
        <SalesUploadDetails />
      </Container>
  );
}

export default Sales;