import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Home = () => {
  return (
    <LayoutNews>
      <PageIntro
        categoryPage="Visão Geral & Principais Notícias"
        summary="Acompanhe os principais desdobramentos políticos, econômicos e globais com análise aprofundada."
      />
      <MainHeadline />
      <ShortNews />
      <SoftNews />
      <SubHeadline />
      <NewsLetter />
    </LayoutNews>
  )
}

export default Home
