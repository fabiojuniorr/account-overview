import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: auto;
`

export const Title = styled.span`
  font-size: 30px;
  color: #5a5a5a;
  display: flex;
  justify-items: start;
`

export const Header = styled.header`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`

export const Content = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
`