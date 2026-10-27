import { HeaderContainer, LinksPages } from './style'
import Logo from '../../assets/images/Folha News Logo.svg'
import { useState } from 'react'

const Header = () => {
  const [selected, setSelected] = useState<string | null>('Home')

  function Toggle(category: string) {
    setSelected((links) => (links === category ? null : category))
  }

  return (
    <HeaderContainer className="container">
      <img src={Logo} alt="imagem da Logo" />
      <nav>
        <ul>
          <LinksPages $selected={selected === 'Home'} onClick={() => Toggle('Home')}>
            Home
          </LinksPages>
          <LinksPages
            $selected={selected === 'Economia & Negócios'}
            onClick={() => Toggle('Economia & Negócios')}
          >
            Economia & Negócios
          </LinksPages>
          <LinksPages $selected={selected === 'Brasil'} onClick={() => Toggle('Brasil')}>
            Brasil
          </LinksPages>
          <LinksPages
            $selected={selected === 'Mundo & Geopolitica'}
            onClick={() => Toggle('Mundo & Geopolitica')}
          >
            Mundo & Geopolitica
          </LinksPages>
          <LinksPages $selected={selected === 'Tecnologia'} onClick={() => Toggle('Tecnologia')}>
            Tecnologia
          </LinksPages>
          <LinksPages
            $selected={selected === 'Ciência & Saúde'}
            onClick={() => Toggle('Ciência & Saúde')}
          >
            Ciência & Saúde
          </LinksPages>
          <LinksPages
            $selected={selected === 'Cultura & Arte'}
            onClick={() => Toggle('Cultura & Arte')}
          >
            Cultura & Arte
          </LinksPages>
          <LinksPages $selected={selected === 'Esportes'} onClick={() => Toggle('Esportes')}>
            Esportes
          </LinksPages>
          <LinksPages
            $selected={selected === 'Opinião & Editoriais'}
            onClick={() => Toggle('Opinião & Editoriais')}
          >
            Opinião & Editoriais
          </LinksPages>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header
