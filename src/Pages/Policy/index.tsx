import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Policy = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="Politica"
          summary="Bastidores do poder, Congresso, Judiciário e decisões que movimentam Brasília."
        />
        <MainHeadline />
        <ShortNews />
        <SoftNews />
        <SubHeadline />
      </LayoutNews>
    </>
  )
}

export default Policy
