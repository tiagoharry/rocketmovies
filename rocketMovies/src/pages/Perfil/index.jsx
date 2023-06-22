import { Container, Form, Avatar, Header } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom"

export function Perfil() {
  return (
    <Container>
      <Header>
      <Link to="/"><BsArrowLeftShort />Voltar</Link>
      </Header>
     
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