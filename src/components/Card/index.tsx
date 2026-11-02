import type { ReactNode } from 'react'

import { CardNews, CommentCard, MainCard, TextCard } from './style'

type CardProps = {
  children?: ReactNode
  title?: string
  source?: string
  photo?: string
  location?: string
  time?: string
  author?: string
  avatar?: string
  alt?: string
  type: 'card' | 'comentCard' | 'topCard'
  category?: string
  className?: string
}

const Card = ({
  children,
  author,
  avatar,
  location,
  photo,
  source,
  time,
  title,
  type,
  category,
  alt,
  className
}: CardProps) => {
  //main card
  if (type === 'card') {
    return (
      <MainCard className={className}>
        {photo && <img src={photo} alt={alt} />}
        <div>
          <ul>
            <li>{author && <span> Por {author}</span>}</li>
            <li>{time && <span>{time} minutos de leitura</span>}</li>
            <li>{location && <span>{location}</span>}</li>
          </ul>
          {title && <h3>{title}</h3>}
          {children && <TextCard>{children}</TextCard>}
        </div>
      </MainCard>
    )
  }
  if (type === 'comentCard') {
    return (
      <CommentCard className={className}>
        {photo && <img src={photo} alt={alt} />}
        {category && <h4>{category}</h4>}
        {title && <h3>{title}</h3>}
        {children && <TextCard>{children}</TextCard>}
        <div className="credits">
          {author && <span>{author}</span>}
          {time && <span>{time}</span>}
        </div>
      </CommentCard>
    )
  }
  if (type === 'topCard') {
    return (
      <CardNews className={className}>
        <div className="card-news-header">
          {avatar && <img src={avatar} alt={alt} />}
          <div>
            {author && <p>{author}</p>}
            {source && <span>{source}</span>}
          </div>
        </div>
        {title && <h3>{title}</h3>}
      </CardNews>
    )
  }
}

export default Card
