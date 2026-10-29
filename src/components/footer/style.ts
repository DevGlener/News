import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${colors.overallColor};
  font-family: ${fonts.mainSource};
  height: 116px;

  ul {
    display: flex;
    gap: 24px;
    background-color: ${colors.overallColor};
  }

  > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.overallColor};
  }

  p {
    background-color: ${colors.overallColor};
    color: ${colors.gray};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`
