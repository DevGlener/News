import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Science = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          time={7}
          categoryPage="Ciência & Saúde"
          summary="Pesquisas científicas, avanços médicos, meio ambiente e descobertas que moldam o futuro da humanidade."
        />
        <MainHeadline />
        <ShortNews />
        <SoftNews />
        <SubHeadline />
      </LayoutNews>
    </>
  )
}

export default Science
