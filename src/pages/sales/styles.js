import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 16px;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    padding: 12px;
    width: 80%;
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

export const Upload = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const UploadDetails = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 14px;
  margin-top: 8px;
  color: #5a5a5a;
`

export const BoldText = styled.span`
  font-weight: bold;
`;