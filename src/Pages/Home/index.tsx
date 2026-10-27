import Footer from '../../components/footer'
import Header from '../../components/Header'
import LayoutNews from '../../components/LayoutNews/LayoutNews'
import PageIntro from '../../components/PageIntro'
import Tag from '../../components/Tag'

const Home = () => {
  return (
    <>
      <Header />
      <PageIntro />
      <LayoutNews />
      <Tag color="blue">Noticias</Tag>
      <Footer />
    </>
  )
}

export default Home
