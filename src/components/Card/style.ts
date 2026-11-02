import styled, { css } from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const card = css`
  h3 {
    font-family: ${fonts.secondarySource};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: ${colors.TagDarkBlue};
    margin: 8px 0;
  }
  span {
    font-family: ${fonts.mainSource};
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: ${colors.gray};
  }
`

export const MainCard = styled.div`
  max-width: 766px;
  width: 100%;
`
export const CommentCard = styled.div`
  max-width: 394px;
  width: 100%;
`
export const CardNews = styled.div`
  max-width: 256px;
  width: 100%;
`

export const TextCard = styled.div`
  font-family: ${fonts.mainSource};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.gray};
`
