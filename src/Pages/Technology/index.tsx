import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Technology = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="Tecnologia"
          summary="Inovação, inteligência artificial, startups e o impacto digital na sociedade."
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

export default Technology
