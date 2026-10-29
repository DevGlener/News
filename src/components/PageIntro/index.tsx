import { ContainerPg } from './style'

type PageIntro = {
  categoryPage?: string
  summary?: string
}

const PageIntro = ({ categoryPage, summary }: PageIntro) => {
  return (
    <ContainerPg className="container">
      <h2>EDITORIAL CENTRAL</h2>
      {categoryPage && <h3>{categoryPage}</h3>}
      {summary && <p>{summary} </p>}
    </ContainerPg>
  )
}

export default PageIntro
