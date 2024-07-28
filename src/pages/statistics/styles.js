import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const Box = styled.div`
  display: grid;
  align-content: center;
  justify-items: start;
  padding: 0 14px 0 14px;
  background-color: #fff;
  width: 50%;
  height: 85%;
  border-right: ${(props) => (props.leftRadius !== 0 ? '1px solid #e0e0e0' : 'none')};
  border-bottom-left-radius: ${props => `${props.leftRadius}px`};
  border-bottom-right-radius: ${props => `${props.rightRadius}px`};

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-right: ${(props) => (props.leftRadius !== 0 ? '1px solid #e0e0e0' : 'none')};
    border-bottom-left-radius: ${props => `${props.leftRadius}px`};
    border-bottom-right-radius: ${props => `${props.rightRadius}px`};
  }
`

export const Percentage = styled.div`
  font-size: 35px;
  font-weight: 600;
  color: #22ab55;
`

export const Title = styled.div`
  font-size: 12px;
  color: #9f9f9f;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px
`