import styled from 'styled-components'

export const Main = styled.div`
  display: grid;
  margin-bottom: 48px;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  padding: 0 24px;
  width: 100%;
  column-gap: 24px;
`
