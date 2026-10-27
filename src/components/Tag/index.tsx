import { TagC, type TagProps } from './style'

const Tag = ({ children, color }: TagProps) => {
  return <TagC color={color}>{children}</TagC>
}
export default Tag
