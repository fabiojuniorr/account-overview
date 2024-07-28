import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
`

export const Title = styled.span`
  font-size: 30px;
  color: #5a5a5a;
  display: flex;
  justify-items: start;
`

export const Header = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
`