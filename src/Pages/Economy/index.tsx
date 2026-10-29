import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Economy = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="Economia & Negócios"
          summary="Mercados, inflação, investimentos e o cenário corporativo nacional e internacional."
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

export default Economy
