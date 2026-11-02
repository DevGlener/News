import { createGlobalStyle } from 'styled-components'
import { colors } from './rules'

const GlobalStyle = createGlobalStyle`

*{  
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  body{
    background-color: ${colors.wallpaper};
    .container{      
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
    }
  }
}


`

export default GlobalStyle
