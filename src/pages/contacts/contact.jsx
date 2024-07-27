import {
  Container,
  SupportContact,
  SupportDetail,
  SupportEmail,
  SupportIcon,
  SupportInfo,
  SupportTitle
} from "./styles"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const Contact  = () => {
  return (
      <Container>
        <h5> Your feefo support contact </h5>
        <SupportDetail>
          <SupportIcon>S</SupportIcon>
          <SupportInfo>
            <SupportTitle>
              Support
            </SupportTitle>
            <SupportContact>
              <FontAwesomeIcon icon={faEnvelope} />
              <SupportEmail>
                support@feefo.com
              </SupportEmail>
              <span>020 3362 4208</span>
            </SupportContact>
          </SupportInfo>
        </SupportDetail>
      </Container>
  );
};