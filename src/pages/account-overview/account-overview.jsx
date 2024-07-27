import React from 'react';

import {Contact} from "../contacts/contact";
import {Container, Title} from "./styles";

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <Container>
      <Title>Account Overview</Title>
      <Contact />
    </Container>
  )
}

export default AccountOverview;