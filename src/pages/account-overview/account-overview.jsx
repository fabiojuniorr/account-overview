import React from 'react';

import {Contact} from "../contacts/contact";
import {Container, Title} from "./styles";
import PropTypes from "prop-types";

export const AccountOverview = ({ data: { supportContact, salesOverview } }) => {
  console.log(supportContact, salesOverview);

  return (
    <Container>
      <Title>Account Overview</Title>
      <Contact contact={supportContact} />
    </Container>
  )
}

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
      lastUploadDate: PropTypes.number,
    }),
  }).isRequired,
};

export default AccountOverview;