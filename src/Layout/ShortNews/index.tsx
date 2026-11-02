import { TrendingUp } from 'lucide-react'
import { CardShort, ShortNewsHome } from './style'

const ShortNews = () => {
  return (
    <ShortNewsHome>
      <div className="short-titles">
        <h3>Mais Lidas</h3>
        <TrendingUp />
      </div>
      <CardShort
        type="comentCard"
        category="TECNOLOGIA"
        title="Inteligência Artificial generativa transforma o mercado de trabalho jurídico no Brasil"
        time={'Há 4 horas'}
      />
      <CardShort
        type="comentCard"
        category="TECNOLOGIA"
        title="Inteligência Artificial generativa transforma o mercado de trabalho jurídico no Brasil"
        time={'Há 4 horas'}
      />
      <CardShort
        type="comentCard"
        category="TECNOLOGIA"
        title="Inteligência Artificial generativa transforma o mercado de trabalho jurídico no Brasil"
        time={'Há 4 horas'}
      />
      <CardShort
        type="comentCard"
        category="TECNOLOGIA"
        title="Inteligência Artificial generativa transforma o mercado de trabalho jurídico no Brasil"
        time={'Há 4 horas'}
      />
      <CardShort
        type="comentCard"
        category="TECNOLOGIA"
        title="Inteligência Artificial generativa transforma o mercado de trabalho jurídico no Brasil"
        time={'Há 4 horas'}
      />
    </ShortNewsHome>
  )
}

export default ShortNews
