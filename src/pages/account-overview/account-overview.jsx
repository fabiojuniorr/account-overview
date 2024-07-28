import React from 'react';

import {Contacts} from "../contacts/contacts";
import {Container, Content, Header, Title} from "./styles";
import PropTypes from "prop-types";
import Sales from "../sales/sales";
import Statistics from "../statistics/statistics";

export const AccountOverview = ({ data: { supportContact, salesOverview }, onSalesOverviewChange }) => {
  return (
    <Container>
      <Header>
        <Title>Account Overview</Title>
        <Contacts contact={supportContact} />
      </Header>
      <Content>
        <Sales salesOverview={salesOverview} onSalesOverviewChange={onSalesOverviewChange} />
        <Statistics salesOverview={salesOverview} />
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
  onSalesOverviewChange: PropTypes.func.isRequired,
};

export default AccountOverview;