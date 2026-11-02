import Card from '../../components/Card'
import Tag from '../../components/Tag'
// import Tag from '../../components/Tag'

import { MainHeadlineHome } from './style'

const MainHeadline = () => {
  return (
    <MainHeadlineHome>
      <Card
        type="card"
        photo="https://via.placeholder.com/766x430"
        author="Por Carlos Eduardo Silva"
        time={'4'}
        location="Brasília"
        title="Acordo histórico no Congresso redefine diretrizes fiscais e investimentos em infraestrutura para o
              próximo biênio"
      >
        <Tag color="red">NEGOCIOS</Tag>
        Lideranças partidárias firmam pacto inédito após semanas de negociações intensas. Medida
        visa destravar obras paradas e garantir previsibilidade orçamentária para estados e
        municípios em meio ao cenário global desafiador.
      </Card>
    </MainHeadlineHome>
  )
}

export default MainHeadline
