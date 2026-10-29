import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export type HeaderProps = {
  $selected: boolean
}

export const HeaderContainer = styled.header`
  margin-bottom: 12px;
  padding: 16px 24px;
  background-color: ${colors.overallColor};

  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(1, 0, 0, 0.05);

  > .container {
    display: block;
    background-color: ${colors.overallColor};
  }
  img,
  img {
    margin-bottom: 15px;
    display: block;
    background-color: ${colors.overallColor};
  }
`

export const ListaLinks = styled.ul`
  background-color: ${colors.overallColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinksPages = styled.li<HeaderProps>`
  background-color: ${colors.overallColor};
  font-family: ${fonts.mainSource};
  white-space: nowrap;
  cursor: pointer;
  background-color: ${({ $selected }) => ($selected ? colors.newsletterBg : '')};
  color: ${({ $selected }) => ($selected ? colors.white : colors.gray)};
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  border-radius: ${({ $selected }) => ($selected ? '8px' : '0')};
  padding: 8px 12px;
`
