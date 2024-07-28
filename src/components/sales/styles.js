import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  width: 100%;
  max-width: 700px;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 20px;
  color: #3eb1eb;
  margin-right: 8px;

  &:hover {
    color: #3091d0;
  }
`;

export const Title = styled.span`
  font-weight: bold;
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const UploadDetails = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  color: #5a5a5a;
  padding: 0 14px 14px 14px;
`

export const BoldText = styled.span`
  font-weight: bold;
`;