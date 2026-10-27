import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const NewsLetterContainer = styled.div`
  padding: 24px;
  background-color: ${colors.newsletterBg};
  grid-column: 3/4;
  grid-row: 5/6;
  max-width: 394px;
  height: 322px;
  border-radius: 12px;
  h3 {
    font-family: ${fonts.secondarySource};
    font-size: 20px;
    line-height: 28px;
    color: ${colors.white};
    font-weight: 600;
    margin: 16px 0;
  }
  p {
    font-family: ${fonts.mainSource};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.textNewsLetter};
    margin-bottom: 16px;
  }
`
export const Titles = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.TagRed};
  gap: 8px;

  h4 {
    font-family: ${fonts.mainSource};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const SignUp = styled.div`
  input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${colors.borderInput};
    margin-bottom: 8px;
    background-color: transparent;
    color: ${colors.textNewsLetter};
    padding: 0 16px;
    font-size: 16px;
  }
  button {
    height: 44px;
    background-color: ${colors.TagRed};
    border: none;
    width: 100%;
    color: ${colors.white};
    font-size: 16px;
    text-align: center;
    font-family: ${fonts.mainSource};
    font-weight: 400;
    line-height: 24px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${colors.TagRedHover};
    }
    &:active {
      background-color: ${colors.TagRedActive};
    }
  }
`
