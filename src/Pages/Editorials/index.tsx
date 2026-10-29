import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'

const Editoriais = () => {
  return (
    <>
      <LayoutNews>
        <PageIntro
          categoryPage="Opinião & Editoriais"
          summary="Artigos, ensaios e a visão dos nossos colunistas sobre os fatos que moldam o Brasil e o mundo."
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

export default Editoriais
