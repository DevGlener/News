import NewsLetter from '../NewsLetter'
import MainHeadline from './MainHeadline'
import ShortNews from './ShortNews'
import SoftNews from './SoftNews'
import { ContainerLN } from './style'
import SubHeadline from './SubHeadline'

const LayoutNews = () => {
  return (
    <ContainerLN className="container">
      <MainHeadline />
      <ShortNews />
      <SoftNews />
      <SubHeadline />
      <NewsLetter />
    </ContainerLN>
  )
}

export default LayoutNews
