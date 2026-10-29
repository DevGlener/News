import { HeaderContainer, LinksPages, ListaLinks } from './style'
import Logo from '../../assets/images/Folha News Logo.svg'
import { useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [selected, setSelected] = useState<string | null>('Home')

  function Toggle(category: string) {
    setSelected((links) => (links === category ? null : category))
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Link to={'/'}>
          <img src={Logo} alt="imagem Logo Folha News" title="imagem da logo" />
        </Link>
        <nav>
          <ListaLinks>
            <Link to={'/'}>
              <LinksPages
                title="Home"
                $selected={selected === 'Home'}
                onClick={() => Toggle('Home')}
              >
                Home
              </LinksPages>
            </Link>
            <Link to={'/policy'}>
              <LinksPages
                title="politica"
                $selected={selected === 'Politica'}
                onClick={() => Toggle('Politica')}
              >
                Politica
              </LinksPages>
            </Link>
            <Link to={'/economy'}>
              <LinksPages
                title="economia"
                $selected={selected === 'Economia & Negócios'}
                onClick={() => Toggle('Economia & Negócios')}
              >
                Economia & Negócios
              </LinksPages>
            </Link>
            <Link to={'/brazil'}>
              <LinksPages
                title="brasil"
                $selected={selected === 'Brasil'}
                onClick={() => Toggle('Brasil')}
              >
                Brasil
              </LinksPages>
            </Link>
            <Link to={'/world'}>
              <LinksPages
                title="mundo e geopolica"
                $selected={selected === 'Mundo & Geopolitica'}
                onClick={() => Toggle('Mundo & Geopolitica')}
              >
                Mundo & Geopolitica
              </LinksPages>
            </Link>
            <Link to={'/technology'}>
              <LinksPages
                title="tecnologia"
                $selected={selected === 'Tecnologia'}
                onClick={() => Toggle('Tecnologia')}
              >
                Tecnologia
              </LinksPages>
            </Link>
            <Link to={'/science'}>
              <LinksPages
                title="ciencia e saude"
                $selected={selected === 'Ciência & Saúde'}
                onClick={() => Toggle('Ciência & Saúde')}
              >
                Ciência & Saúde
              </LinksPages>
            </Link>
            <Link to={'/culture'}>
              <LinksPages
                title="cultura e arte"
                $selected={selected === 'Cultura & Arte'}
                onClick={() => Toggle('Cultura & Arte')}
              >
                Cultura & Arte
              </LinksPages>
            </Link>
            <Link to={'/sport'}>
              <LinksPages
                title="esportes"
                $selected={selected === 'Esportes'}
                onClick={() => Toggle('Esportes')}
              >
                Esportes
              </LinksPages>
            </Link>
            <Link to={'/editorials'}>
              <LinksPages
                title="opniao e editoriais"
                $selected={selected === 'Opinião & Editoriais'}
                onClick={() => Toggle('Opinião & Editoriais')}
              >
                Opinião & Editoriais
              </LinksPages>
            </Link>
          </ListaLinks>
        </nav>
      </div>
    </HeaderContainer>
  )
}

export default Header
