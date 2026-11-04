import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'
import { NavLink } from 'react-router'

export const HeaderContainer = styled.header`
  margin-bottom: 12px;
  padding: 16px 24px;
  background-color: ${colors.overallColor};

  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(1, 0, 0, 0.05);

  .image-logo {
    margin-bottom: 15px;
    display: inline-block;
  }
`

export const ListaLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinksPages = styled(NavLink)`
  display: block;
  font-family: ${fonts.mainSource};
  white-space: nowrap;
  color: ${colors.gray};
  font-weight: 400;
  padding: 8px 12px;

  &.active {
    background-color: ${colors.newsletterBg};
    color: ${colors.white};
    font-weight: 600;
    border-radius: 8px;
  }
`
