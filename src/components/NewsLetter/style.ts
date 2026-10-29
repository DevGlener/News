import styled from 'styled-components'
import { colors, fonts } from '../../styles/rules'

export const NewsLetterContainer = styled.div`
  background-color: ${colors.newsletterBg};
  border-radius: 12px;
  padding: 24px;
  grid-column: 3/4;
  grid-row: 5/6;

  .news-letter {
    color: ${colors.white};
    background-color: ${colors.newsletterBg};
    h3 {
      margin: 16px 0;
      background-color: ${colors.newsletterBg};
      font-family: ${fonts.secondarySource};
      font-size: 20;
      font-weight: 600;
      line-height: 28px;
    }
    p {
      font-family: ${fonts.mainSource};
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      background-color: ${colors.newsletterBg};
      margin-bottom: 16px;
      color: ${colors.textNewsLetter};
    }
  }
`
export const Title = styled.div`
  svg {
    background-color: ${colors.newsletterBg};
  }
  background-color: ${colors.newsletterBg};
  display: flex;
  align-items: center;
  color: ${colors.TagRed};
  gap: 8px;

  h4 {
    font-family: ${fonts.mainSource};
    background-color: ${colors.newsletterBg};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`
export const SignUp = styled.div`
  background-color: ${colors.newsletterBg};
  input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${colors.borderInput};
    margin-bottom: 8px;
    background-color: transparent;
    color: ${colors.colorInput};
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
