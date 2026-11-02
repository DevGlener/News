import styled from 'styled-components'
import Card from '../../components/Card'
import { colors, fonts } from '../../styles/rules'
import { card } from '../../components/Card/style'

export const SoftNewsHome = styled.section`
  ${card}
  grid-column: 1/3;
  grid-row: 3/5;
  margin-top: 48px;

  max-width: 814px;
  width: 100%;

  border-radius: 12px;

  display: flex;
  gap: 24px;
`
export const CardSoft = styled(Card)`
  background-color: ${colors.white};
  border-radius: 12px;
  width: 256px;
  height: 412px;
  padding: 16px;

  h4 {
    color: ${colors.TagRed};
    margin: 8px 0;
    font-weight: 400;
    font-family: ${fonts.mainSource};
    font-size: 16px;
    line-height: 24px;
  }

  h3 {
    margin: 0;
  }

  .credits {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid ${colors.colorBorder};
  }
  div {
    margin-bottom: 28px;
  }
  span {
    padding-top: 8px;
  }
`
