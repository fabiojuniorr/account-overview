import React from 'react';

import {Contact} from "../contacts/contact";
import {Container, Content, Header, Title} from "./styles";
import PropTypes from "prop-types";
import Sale from "../sales/sale";
import Statistic from "../statistics/statistic";

export const AccountOverview = ({ data: { supportContact, salesOverview } }) => {
  console.log(supportContact, salesOverview);

  return (
    <Container>
      <Header>
        <Title>Account Overview</Title>
        <Contact contact={supportContact} />
      </Header>
      <Content>
        <Sale />
        <Statistic />
      </Content>
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