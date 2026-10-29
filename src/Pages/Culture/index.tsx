import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Culture = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="Cultura & Artes"
          summary="Literatura, cinema, artes visuais, música e debates culturais. Uma imersão profunda na vanguarda artística e nos reflexos da sociedade contemporânea."
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

export default Culture
