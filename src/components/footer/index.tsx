import { FooterContainer } from './style'

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        {<p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>}
        <ul>
          <li>
            <p>Termos de Uso</p>
          </li>
          <li>
            <p>Política de Privacidade</p>
          </li>
          <li>
            <p>Anuncie</p>
          </li>
        </ul>
      </div>
    </FooterContainer>
  )
}

export default Footer
