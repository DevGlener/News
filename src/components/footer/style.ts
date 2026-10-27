import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const FooterContainer = styled.footer`
  height: 116px;
  width: 100%;
  padding: 0 24px;
  font-family: ${fonts.mainSource};
  background-color: ${colors.overallColor};
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: ${colors.gray};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  ul {
    display: flex;
    gap: 24px;
  }
`
