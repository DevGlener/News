import styled from 'styled-components'
import { colors } from '../../styles/rules'
import { TagC } from '../../components/Tag/style'
import { card } from '../../components/Card/style'

export const MainHeadlineHome = styled.section`
  ${card}

  grid-row: 2/3;
  grid-column: 1/3;
  position: relative;
  background-color: ${colors.white};

  border-radius: 12px;
  padding: 24px;
  max-width: 814px;
  img {
    width: 100%;
  }

  ${TagC} {
    position: absolute;
    z-index: 1;
    top: 42px;
    left: 40px;
  }
  ul {
    display: flex;
    margin-top: 16px;
    column-gap: 38px;
  }
`
