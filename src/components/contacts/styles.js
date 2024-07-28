import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  max-width: 400px;
`

export const Title = styled.div`
  text-transform: uppercase;
  color: #9f9f9f;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px
`

export const SupportDetail = styled.div`
  display: grid;
  align-items: center;
  margin-top: -7px;
  grid-template-columns: 50px auto;
`

export const SupportIcon = styled.div`
  background-color: #ffcc00;
  color: black;
  padding: 10px;
  border-radius: 10%;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

export const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #5a5a5a;
  
  p {
    margin: 0;
  }
`

export const SupportTitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`

export const SupportContacts = styled.p`
  display: flex;
  margin-top: 5px !important;
  font-size: 14px;
  
  @media (max-width: 768px) {
    display: grid;
    justify-items: start;;
  }
`

export const SupportEmail = styled.span`
  display: flex;
  margin-right: 20px;
`

export const MarginLeft = styled.span`
  margin-left: ${props => `${props.ml}px`};
`