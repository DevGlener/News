import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'
import { card } from '../../components/Card/style'
import Card from '../../components/Card'

export const SubHeadlineHome = styled.aside`
  ${card}
  margin-bottom: 48px;

  grid-column: 3/5;
  grid-row: 3/5;

  max-width: 394px;
  width: 100%;

  height: 492px;
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 24px;

  .subheadline-header {
    h2 {
      font-family: ${fonts.secondarySource};
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: ${colors.TagDarkBlue};
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid ${colors.colorBorder};
    margin-bottom: 16px;
  }
`
export const CardSubHeadLine = styled(Card)`
  ${card}
  max-width: 346px;
  width: 100%;

  margin: 8px 0;

  > span {
    font-family: ${fonts.secondarySource};
  }
  > .card-news-header {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  img {
    border-radius: 50%;
  }
  border-bottom: 1px solid ${colors.colorBorder};
`
