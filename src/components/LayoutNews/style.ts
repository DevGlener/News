import styled from 'styled-components'
import { colors } from '../../styles/rules'

export const ContainerLN = styled.main`
  background-color: ${colors.border};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  width: 100%;
  height: 100vh;
`
