// import { useEffect, useState } from 'react'

// import type { Article } from '../types/gnews'

// const API_KEY = import.meta.env.VITE_GNEWS_API_KEY

// export default function TopHeadlines() {
//   const [articles, setArticles] = useState<Article[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch(
//       `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${API_KEY}`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Request failed: ${response.status}`)
//         }
//         return response.json()
//       })
//       .then((data) => setArticles(data.articles))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false))
//   }, [])

//   if (loading) return <p>Carregando manchetes...</p>
//   if (error) return <p>Erro: {error}</p>

//   return (
//     <ul>
//       {articles.map((article) => (
//         <li key={article.url}>
//           <a href={article.url} target="_blank" rel="noopener noreferrer">
//             {article.image}
//           </a>
//         </li>
//       ))}
//     </ul>
//   )
// }
