import { MessagesSquare } from 'lucide-react'
import { CardSubHeadLine, SubHeadlineHome } from './style'

const SubHeadline = () => {
  return (
    <SubHeadlineHome>
      <div className="subheadline-header">
        <h2>Opinião & Editoriais</h2>
        <MessagesSquare size={22} />
      </div>
      <ul>
        <li>
          <CardSubHeadLine
            type="topCard"
            avatar="https://via.placeholder.com/48x48"
            author="Maria Luiza Azevedo"
            source="Especial para a Folha News"
            title="O papel das instituições na estabilidade democrática contemporânea"
          />
        </li>
        <li>
          <CardSubHeadLine
            type="topCard"
            avatar="https://via.placeholder.com/48x48"
            author="Maria Luiza Azevedo"
            source="Especial para a Folha News"
            title="O papel das instituições na estabilidade democrática contemporânea"
          />
        </li>
        <li>
          <CardSubHeadLine
            type="topCard"
            avatar="https://via.placeholder.com/48x48"
            author="Maria Luiza Azevedo"
            source="Especial para a Folha News"
            title="O papel das instituições na estabilidade democrática contemporânea"
          />
        </li>
      </ul>
    </SubHeadlineHome>
  )
}

export default SubHeadline
