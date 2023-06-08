import { Container, Form, Avatar } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Perfil() {
  return (
    <Container>
      <header>
        <a href="/">Voltar</a>
      </header>
     
      <Form>
        <Avatar>
          <img src="http://github.com/tiagoharry.png" alt="foto do usuário" />
        </Avatar>
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="text" placeholder="Senha atual" />
        <Input type="text" placeholder="Nova senha" />
        <Button title="Salvar" />
      </Form>

    </Container>
  )
}