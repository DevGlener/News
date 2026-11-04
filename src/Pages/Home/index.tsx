// import { useEffect, useState } from 'react'
// import NewsLetter from '../../components/NewsLetter'
// import PageIntro from '../../components/PageIntro'
// import LayoutNews from '../../Layout/LayoutNews'
// import MainHeadline from '../../Layout/MainHeadline'
// import ShortNews from '../../Layout/ShortNews'
// import SoftNews from '../../Layout/SoftNews'
// import SubHeadline from '../../Layout/SubHeadline'
// import type { Article } from '../../types/gnews'
// import Card from '../../components/Card'

// const Home = () => {
//   const [news, setNews] = useState<Article[]>([])

//   const API_KEY = import.meta.env.VITE_GNEWS_API_KEY

//   const params = new URLSearchParams({
//     lang: 'pt',
//     country: 'br',
//     max: '10',
//     apikey: API_KEY
//   })

//   useEffect(() => {
//     fetch(`https://gnews.io/api/v4/top-headlines?${params}`, {
//       method: 'GET'
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.articles)
//         setNews(data.articles)
//       })
//   }, [])

//   return (
//     <LayoutNews>
//       <PageIntro
//         time={5}
//         categoryPage="Visão Geral & Principais Notícias"
//         summary="Acompanhe os principais desdobramentos políticos, econômicos e globais com análise aprofundada."
//       />
//       <MainHeadline>
//         {/* Percorremos o array 'news' para criar um Card para cada notícia */}
//         {news.length > 0 ? (
//           news.map((article, index) => (
//             <Card
//               key={index}
//               type={'card'}
//               photo={article.image || ''} // Imagem da notícia
//               author={article.source?.name || ''} // Nome do portal/fonte como autor
//               time={article.publishedAt || ''} // Data/hora da publicação
//               location="" // O GNews não retorna localização específica, deixe vazio ou ajuste se necessário
//               title={article.title || ''} // Título da notícia
//             />
//           ))
//         ) : (
//           <p>Carregando notícias...</p>
//         )}
//       </MainHeadline>

//       <ShortNews />
//       <SoftNews />
//       <SubHeadline />
//       <NewsLetter />
//     </LayoutNews>
//   )
// }

// export default Home

import { useEffect, useState } from 'react'
import NewsLetter from '../../components/NewsLetter'
import PageIntro from '../../components/PageIntro'
import LayoutNews from '../../Layout/LayoutNews'
import MainHeadline from '../../Layout/MainHeadline'
import ShortNews from '../../Layout/ShortNews'
import SoftNews from '../../Layout/SoftNews'
import SubHeadline from '../../Layout/SubHeadline'
import type { Article } from '../../types/gnews'
import Card from '../../components/Card'

const Home = () => {
  const [news, setNews] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  const API_KEY = import.meta.env.VITE_GNEWS_API_KEY

  const params = new URLSearchParams({
    lang: 'pt',
    country: 'br',
    max: '10',
    apikey: API_KEY
  })

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/top-headlines?${params}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNews(data.articles)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Erro ao buscar notícias:', err)
        setLoading(false)
      })
  }, [])

  return (
    <LayoutNews>
      <PageIntro
        time={5}
        categoryPage="Visão Geral & Principais Notícias"
        summary="Acompanhe os principais desdobramentos políticos, econômicos e globais com análise aprofundada."
      />

      <MainHeadline>
        {loading ? (
          <p>Carregando notícias...</p>
        ) : news && news.length > 0 ? (
          news.map((article, id) => (
            <Card
              key={id}
              type={'card'}
              photo={article.image}
              author={article.source?.name}
              time={article.publishedAt}
              location=""
              title={article.title}
            />
          ))
        ) : (
          <p>Nenhuma notícia encontrada ou limite da API excedido (Erro 429).</p>
        )}
      </MainHeadline>

      <ShortNews />
      <SoftNews />
      <SubHeadline />
      <NewsLetter />
    </LayoutNews>
  )
}

export default Home
