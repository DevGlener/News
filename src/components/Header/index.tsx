import { Link } from 'react-router'
import Logo from '../../assets/images/Folha News Logo.svg'
import { HeaderContainer, LinksPages, ListaLinks } from './style'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Link to="/">
          <img className="image-logo" src={Logo} alt="Logo Folha News" />
        </Link>
        <nav>
          <ListaLinks>
            <li>
              <LinksPages to="/" end>
                Home
              </LinksPages>
            </li>
            <li>
              <LinksPages to="/policy">Política</LinksPages>
            </li>
            <li>
              <LinksPages to="/economy">Economia & Negócios</LinksPages>
            </li>
            <li>
              <LinksPages to="/brazil">Brasil</LinksPages>
            </li>
            <li>
              <LinksPages to="/world">Mundo & Geopolítica</LinksPages>
            </li>
            <li>
              <LinksPages to="/technology">Tecnologia</LinksPages>
            </li>
            <li>
              <LinksPages to="/science">Ciência & Saúde</LinksPages>
            </li>
            <li>
              <LinksPages to="/culture">Cultura & Arte</LinksPages>
            </li>
            <li>
              <LinksPages to="/sport">Esportes</LinksPages>
            </li>
            <li>
              <LinksPages to="/editorials">Opinião & Editoriais</LinksPages>
            </li>
          </ListaLinks>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
