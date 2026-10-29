import { Outlet } from 'react-router'
import GlobalStyle from './styles/Global'
import Header from './components/Header'
import Footer from './components/footer'

export function RootLayout() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
