import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  width: 20%;
  display: grid;
  justify-items: start;
  
  h5 {
    text-transform: uppercase;
    color: #9f9f9f;
    align-items: start;
  }
`

export const SupportDetail = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
`


export const SupportIcon = styled.div`
  background-color: #ffcc00;
  color: black;
  padding: 10px;
  border-radius: 10%;
  margin-right: 15px;
  width: 25px;
  height: 25px;
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

export const SupportContact = styled.p`
  display: flex;
  margin-top: 5px !important;
  font-size: 14px;
`

export const SupportEmail = styled.span`
  margin-left: 10px;
  margin-right: 20px;
`