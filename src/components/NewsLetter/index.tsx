import { Mail } from 'lucide-react'
import { NewsLetterContainer, SignUp, Title } from './style'

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <div className="news-letter">
        <Title>
          <Mail />
          <h4>NEWSLETTER EXCLUSIVA</h4>
        </Title>
        <h3>Receba o resumo diário no seu e-mail</h3>
        <p>
          As principais notícias e análises editoriais selecionadas por nossos editores todas as
          manhãs.
        </p>
      </div>
      <SignUp>
        <input type="text" placeholder="Seu melhor e-mail ..." />
        <button>Inscrever-se gratuitamente</button>
      </SignUp>
    </NewsLetterContainer>
  )
}

export default NewsLetter
