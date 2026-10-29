import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Brazil = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="BRASIL"
          summary="Fatos, reportagens especiais e o cotidiano dos estados brasileiros."
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

export default Brazil
