import { createBrowserRouter, RouterProvider } from 'react-router'
import { RootLayout } from './RootLayout'
import Home from './Pages/Home'
import Policy from './Pages/Policy'
import Economy from './Pages/Economy'
import Brazil from './Pages/Brazil'
import Technology from './Pages/Technology'
import Science from './Pages/Science'
import Culture from './Pages/Culture'
import Sport from './Pages/Sport'
import Editoriais from './Pages/Editorials'
import World from './Pages/World'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        children: [
          { path: '/policy', element: <Policy /> },
          { path: 'economy', element: <Economy /> },
          { path: 'brazil', element: <Brazil /> },
          { path: 'world', element: <World /> },
          { path: 'technology', element: <Technology /> },
          { path: 'science', element: <Science /> },
          { path: 'culture', element: <Culture /> },
          { path: 'sport', element: <Sport /> },
          { path: 'editorials', element: <Editoriais /> }
        ]
      }
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
