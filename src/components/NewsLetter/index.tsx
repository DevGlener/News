import { Mail } from 'lucide-react'
import { NewsLetterContainer, Titles, SignUp } from './style'

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <Titles>
        <Mail />
        <h4>NEWSLETTER EXCLUSIVA</h4>
      </Titles>
      <h3>Receba o resumo diário no seu e-mail</h3>
      <p>
        As principais notícias e análises editoriais selecionadas por nossos editores todas as
        manhãs.
      </p>
      <SignUp>
        <input type="text" placeholder="Seu melhor e-mail ..." />
        <button>Inscrever-se gratuitamente</button>
      </SignUp>
    </NewsLetterContainer>
  )
}

export default NewsLetter
