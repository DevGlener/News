import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export type HeaderProps = {
  $selected: boolean
}

export const HeaderContainer = styled.header`
  padding: 16px 24px;
  max-width: 1280px;
  width: 100%;
  background-color: ${colors.overallColor};
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  img {
    width: 128px;
    height: 32px;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }
`
export const LinksPages = styled.li<HeaderProps>`
  font-family: ${fonts.mainSource};
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? colors.newsletterBg : '')};
  color: ${({ $selected }) => ($selected ? colors.white : colors.gray)};
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  border-radius: ${({ $selected }) => ($selected ? '8px' : '0')};
  padding: 16px 16px;
`
