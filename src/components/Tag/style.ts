import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'
import TagProps from '.'

export type TagProps = {
  children: string
  color: 'red' | 'blue'
}

export const TagC = styled.p<TagProps>`
  display: inline-block;
  background-color: ${(props) => (props.color === 'red' ? colors.TagRed : colors.TagDarkBlue)};
  padding: 4px 16px;
  font-family: ${fonts.mainSource};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${colors.white};
  border-radius: 4px;
`
