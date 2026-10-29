import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const World = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="MUNDO & GEOPOLÍTICA"
          summary="Conflitos, diplomacia e os grandes eventos internacionais que moldam o tabuleiro
político global."
        />
        <MainHeadline />
        <ShortNews />
        <SoftNews />
        <SubHeadline />
        <NewsLetter />
      </LayoutNews>
    </>
  )
}

export default World
