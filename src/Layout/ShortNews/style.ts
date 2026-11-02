import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'
import Card from '../../components/Card'
import { card } from '../../components/Card/style'

export const ShortNewsHome = styled.aside`
  grid-column: 3/4;
  grid-row: 2/3;

  ${card}

  background-color: ${colors.white};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 48px;

  .short-titles {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${fonts.secondarySource};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${colors.TagDarkBlue};
    padding: 0 0 8px 0;
    border-bottom: 1px solid ${colors.colorBorder};
    margin-bottom: 16px;
  }
`

export const CardShort = styled(Card)`
  .short-titles > h3 {
    padding: 0;
  }
  padding: 0 16px 4px 28px;
  border-radius: 0;
  border-bottom: 1px solid ${colors.colorBorder};
  h3 {
    margin: 4px 0;
  }
  h4 {
    color: ${colors.TagRed};
    font-weight: 400;
    font-family: ${fonts.mainSource};
    margin-top: 8px;
  }
`
