import type { ReactNode } from 'react'
import { Main } from './style'

type ContainerProps = {
  children: ReactNode
}

const LayoutNews = ({ children }: ContainerProps) => {
  return <Main className="container">{children}</Main>
}

export default LayoutNews
