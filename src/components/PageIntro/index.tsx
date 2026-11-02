import { ContainerPg } from './style'

type PageIntro = {
  categoryPage?: string
  summary?: string
  time?: number
}

const PageIntro = ({ categoryPage, summary, time }: PageIntro) => {
  return (
    <ContainerPg className="container">
      <div>
        <h2>EDITORIAL CENTRAL</h2>
        {categoryPage && <h3>{categoryPage}</h3>}
        {summary && <p>{summary} </p>}
      </div>
      <span>
        Atualizado ha <span>{time}</span> minutos
      </span>
    </ContainerPg>
  )
}

export default PageIntro
