import type { ReactNode } from 'react'
import Card from '../../components/Card'
import Tag from '../../components/Tag'
// import Tag from '../../components/Tag'

interface MainHeadlineProps {
  children?: ReactNode
}

import { MainHeadlineHome } from './style'

const MainHeadline = ({ children }: MainHeadlineProps) => {
  return (
    <MainHeadlineHome>
      <Card
        type="card"
        photo="" //https://via.placeholder.com/766x430
        author=""
        time=""
        location=""
        title=""
      >
        <Tag color="red">NEGOCIOS</Tag>
      </Card>
      {children}
    </MainHeadlineHome>
  )
}

export default MainHeadline
