import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const ContainerPg = styled.div`
  background-color: ${colors.border};
  padding: 48px 0 0 24px;

  h2 {
    color: ${colors.TagRed};
    font-family: ${fonts.mainSource};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  h3 {
    color: ${colors.TagDarkBlue};
    font-family: ${fonts.secondarySource};
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin: 4px 0;
  }
  p {
    color: ${colors.gray};
    font-family: ${fonts.mainSource};
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    padding-bottom: 48px;
  }
`
