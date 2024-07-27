import {
  Container,
  SupportContacts,
  SupportDetail,
  SupportEmail,
  SupportIcon,
  SupportInfo,
  SupportTitle, Title
} from "./styles"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";

export const Contact  = ({ contact }) => {
  console.log(contact)

  const getFirstLetterSupportName = () => {
    if (contact && contact.name) {
      return contact.name.charAt(0);
    }
    return "";
  }

  return (
      <Container>
        <Title> Your feefo support contact </Title>
        <SupportDetail>
          <SupportIcon>{getFirstLetterSupportName()}</SupportIcon>
          <SupportInfo>
            <SupportTitle>
              {contact.name}
            </SupportTitle>
            <SupportContacts>
              <FontAwesomeIcon icon={faEnvelope} />
              <SupportEmail>
                {contact.email}
              </SupportEmail>
              <span>{contact.phone}</span>
            </SupportContacts>
          </SupportInfo>
        </SupportDetail>
      </Container>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired
};

export default Contact;